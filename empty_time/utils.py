



def find_empty_schedule(empty_schedule, s_datetime, e_datetime):
    #시간을 고유한 값으로 바꿔주기
    start= ((s_datetime.hour-9) + (s_datetime.minute/60))*2
    end= ((e_datetime.hour-9) + (e_datetime.minute/60))*2

    day = s_datetime.day - 1

    for i in range(int(start), int(end)):
        if empty_schedule[day][i] == 1:
            empty_schedule[day][i] = 0
        else:
            continue

def fill_empty_schedule_by_user_id(class_dict):
    #USER 의 클래스를 가져오는 코드

    result = {}
    for (user_id, classinfos) in class_dict:
        empty_schedule = [[1 for j in range(20)] for i in  range(5)]
        for classinfo in classinfos:
            s_datetime = classinfo.start_time
            e_datetime = classinfo.end_time

            find_empty_schedule(empty_schedule, s_datetime, e_datetime) # -> empty_schedule이 user_id
        result[user_id] = empty_schedule
    return result
# for i in range(1,3):
#     fill_empty_schedule_by_user_id(i)
