from eligibility_engine import check_elegibility
from user_input import collect_user_input

user = collect_user_input()


result = check_elegibility(user)

print(result)