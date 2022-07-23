from django.db import models

class UserInfo(models.Model):
	user_id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=45)
	nickname = models.CharField(max_length=45)

	def __str__(self):
		return f"{self.name}({self.nickname})"

class ClassInfo(models.Model):
	class_id = models.AutoField(primary_key=True)
	start_time = models.DateTimeField()
	end_time = models.DateTimeField()
	class_name = models.CharField(max_length=50)
	professor_name = models.CharField(max_length=50)

	def __str__(self):
		return f"{self.class_name}<-{self.professor_name}({self._getTime()})"
	
	def _getTime(self):
		return f"{self.start_time.time()}~{self.end_time.time()}"


class ClassOfUser(models.Model):
	user_id = models.OneToOneField("UserInfo", on_delete=models.CASCADE, primary_key=True)
	class_id = models.ForeignKey("ClassInfo", on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.user_id}->{self.class_id}"

class Friend(models.Model):
	user_id = models.OneToOneField("UserInfo", on_delete=models.CASCADE, primary_key=True, related_name="user")
	friend_ids = models.ForeignKey("UserInfo", on_delete=models.CASCADE, related_name="friend")

	def __str__(self):
		return f"{self.user_id}->{self.friend_ids}"