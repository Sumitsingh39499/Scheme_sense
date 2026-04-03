def boolean(question):
    while True:
        answer = input(question + " (yes/no): ").strip().lower()
        
        if answer in ["yes", "y"]:
            return True
        elif answer in ["no", "n"]:
            return False
        else:
            print("Invalid input. Please enter yes or no.")


def get_int_input(question):
    while True:
        try:
            value = int(input(question))
            if value < 0:
                print("Value cannot be negative.")
                continue
            return value
        except ValueError:
            print("Invalid input. Please enter a number.")


def collect_user_input():
    user = {}

    user["age"] = get_int_input("Enter your age: ")
    user["annual_income"] = get_int_input("Enter your annual income: ")

    user["is_farmer"] = boolean("Are you a farmer")
    user["owns_agricultural_land"] = boolean("Do you own agricultural land")
    user["owns_pucca_house"] = boolean("Do you own a permanent house")
    user["has_ration_card"] = boolean("Do you have a ration card")
    user["is_business_owner"] = boolean("Are you a business owner")

    user["loan_amount"] = get_int_input("Enter required loan amount: ")

    user["is_student"] = boolean("Are you a student")

    # FIXED
    user["highest_education"] = input("What is your highest education: ").strip().lower()

    user["previous_exam_passed"] = boolean("Did you pass your previous exam")
    user["is_government_employee"] = boolean("Are you a government employee")
    user["is_income_tax_payer"] = boolean("Do you pay income tax")

    return user