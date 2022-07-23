import datetime
import pprint

user1_class1_start = datetime.datetime(2022,7,1,9,30)
user1_class1_end = datetime.datetime(2022,7,1,11,00)

user1_class2_start = datetime.datetime(2022,7,2,13,30)
user1_class2_end = datetime.datetime(2022,7,2,14,30)

user2_class1_start = datetime.datetime(2022,7,1,10,30)
user2_class1_end = datetime.datetime(2022,7,1,11,30)

user2_class2_start = datetime.datetime(2022,7,2,14,00)
user2_class2_end = datetime.datetime(2022,7,2,19,00)

empty_schedule = [[1 for j in range(20)] for i in  range(5)]

# pprint.pprint(empty_schedule)

class_1_1 = {
    "user_id": 1,
    "class_id" : 1,
    "start" : user1_class1_start,
    "end" : user1_class1_end
}

class_1_2 = {
    "user_id": 1,
    "class_id" : 2,
    "start" : user1_class2_start,
    "end" : user1_class2_end
}

class_2_1 = {
    "user_id": 2,
    "class_id" : 3,
    "start" : user2_class1_start,
    "end" : user2_class1_end
}

class_2_2 = {
    "user_id": 2,
    "class_id" : 4,
    "start" : user2_class2_start,
    "end" : user2_class2_end
}

class_list = [class_1_1,class_1_2,class_2_1,class_2_2]

def fill_empty_schedule_by_user_id(id):
    #USER 의 클래스를 가져오는 코드
    classes = []

    for class_item in class_list:
        if class_item["user_id"] == id:
            s_datetime = class_item["start"]
            e_datetime = class_item["end"]

            fill_schedule(s_datetime, e_datetime)
        


def fill_schedule(s_datetime, e_datetime):
    #시간을 고유한 값으로 바꿔주기
    start= ((s_datetime.hour-9) + (s_datetime.minute/60))*2
    end= ((e_datetime.hour-9) + (e_datetime.minute/60))*2

    day = s_datetime.day - 1

    for i in range(int(start), int(end)):
        if empty_schedule[day][i] == 1:
            empty_schedule[day][i] = 0
        else:
            pass

    # for j in range(start, end):
    #     user1[day][j] = 0


    # for i in range(5):
    #     for j in range(20):
    #         empty_schedule[i][j] = user1[i][j] * user2[i][j]
    
for i in range(1,3):
    fill_empty_schedule_by_user_id(i)

pprint.pprint(empty_schedule)