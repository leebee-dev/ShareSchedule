from django.shortcuts import render, redirect
from .models import *
from .utils import *
# from .utils import func

# Create your views here.
def home(request):
	user = UserInfo.objects.get(name="오상준")
	classes = _get_class_by_user(user.user_id)
	friends = _get_friend_by_user(user.user_id)
	all_classes = {}
	all_classes[user.user_id] = _get_class_by_user(user.user_id)
	for friend in friends:
		all_classes[friend.user_id] = _get_class_by_user(friend.user_id)
	schedules = fill_empty_schedule_by_user_id(all_classes)
	print(schedules)
	print(UserInfo.objects.get(user_id=2))
	print(UserInfo.objects.get(user_id=3))
	# friend_classes = _get_class_by_users(friends)
	# all_classes = list(set(classes + friend_classes))
	return render(request, "home.html", {'user':user, 'friends':friends, 'schedules':schedules})

def _get_class_by_user(user_id):
	class_ids = set(ClassOfUser.objects.filter(user_id=user_id))
	return [class_info.class_id for class_info in class_ids]

def _get_class_by_users(users):
	classes = list()
	for user in users:
		classes.extend(_get_class_by_user(user.user_id))
	return classes

def _get_friend_by_user(user_id):
	friend_ids = set(Friend.objects.filter(user_id=user_id))
	return [friend.friend_id for friend in friend_ids]

