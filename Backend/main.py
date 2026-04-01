from fastapi import FastAPI
from eligibility_engine import check_elegibility
from user_input import collect_user_input

app = FastAPI()


@app.post("/check-eligibility")
def check(user_input: dict):
    result = check_elegibility(user_input)
    return result