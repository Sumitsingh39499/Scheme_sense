def boolean(question):
    answer = input(question + "(yes/no):").strip().lower()
    if answer == "yes":
        return True
    else:
        return False
    

def collect_user_input():

    user = {}

    user["age"] = int(input("Enter your age: "))

    user["annual_income"] = int(input("Enter your annual income: "))

    user["is_farmer"] = boolean("Are you a farmer")

    user["owns_agricultural_land"] = boolean("Do you own agricultural land")

    user["owns_pucca_house"] = boolean("Do you own a permanent house")

    user["has_ration_card"] = boolean("Do you have a ration card")

    user["is_business_owner"] = boolean("Are you a business owner")

    user["loan_amount"] = int(input("Enter required loan amount: "))

    user["is_student"] = boolean("Are you a student")

    user["highest_education"]= str("Whats your highest education")

    user["previous_exam_passed"] = boolean("Did you pass your previous exam")

    user["is_government_employee"] = boolean("Are you a government employee")

    user["is_income_tax_payer"] = boolean("Do you pay income tax")

    return user