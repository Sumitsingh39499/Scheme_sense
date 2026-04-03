from fastapi import FastAPI
from eligibility_engine import check_eligibility
from pydantic import BaseModel
from ai_explainer import generate_ai_explanation

class UserInput(BaseModel):
    age: int
    annual_income: int
    is_farmer: bool
    owns_agricultural_land: bool
    owns_pucca_house: bool
    has_ration_card: bool
    is_business_owner: bool
    loan_amount: int
    is_student: bool
    highest_education: str
    previous_exam_passed: bool
    is_government_employee: bool
    is_income_tax_payer: bool

app = FastAPI()


@app.post("/check-eligibility")
def check(user_input: UserInput):
    try:
        data = user_input.model_dump()

        result = check_eligibility(data)

        # Add AI explanation to NOT ELIGIBLE schemes
        for scheme in result["not_eligible"]:
            explanation = generate_ai_explanation(
                data,
                scheme["scheme_name"],
                scheme["details"]
            )
            scheme["ai_explanation"] = explanation

        return result

    except Exception as e:
        return {"error": str(e)}