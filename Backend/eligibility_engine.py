import json 

file_path = "../Data/schemes.json"

with open(file_path,'r') as file:
        schemes=json.load(file)



FIELD_EXPLANATION = {
    "is_farmer": "You are a farmer",
    "owns_agricultural_land": "You own agricultural land",
    "is_government_employee": "You are a government employee",
    "is_income_tax_payer": "You pay income tax",
    "owns_pucca_house": "You own a pucca house",
    "has_ration_card": "You have a ration card",
    "is_business_owner": "You are a business owner",
    "is_student": "You are a student",
    "highest_education":"Whats your highest education",
    "previous_exam_passed": " passed the previous exam"
}

NUMERIC_FIELDS = {
    "age": "Your age",
    "annual_income": "Your annual income",
    "loan_amount": "Your requested loan amount"
}


def check_elegibility(user_input):
        eligible_schemes = []
        not_eligible_schemes = []

        for scheme in schemes:
                rules = scheme["eligibility"]
                pass_reasons= []
                fail_reasons = []
                eligible = True
                for rule_key, rule_value in rules.items():
                        #min
                        if rule_key.endswith('_min'):
                                user_key=rule_key.replace('_min','')
                                field_name = NUMERIC_FIELDS.get(user_key, user_key)

                                if user_input.get(user_key,0)<rule_value:
                                        eligible = False
                                        fail_reasons.append(f"{field_name}does not satisfy the limit")   
                                else:
                                     pass_reasons.append(f"{field_name} satisfy the limit")

                        #max
                        elif rule_key.endswith('_max'):
                                user_key=rule_key.replace('_max','')
                                field_name = NUMERIC_FIELDS.get(user_key, user_key)
                                if user_input.get(user_key,0)>rule_value:
                                        eligible = False
                                        fail_reasons.append(f"{field_name} is more then allowed limit")
                                        
                                else:
                                        pass_reasons.append(f"{field_name} is within allowed limit")

                        #bool
                        elif isinstance(rule_value, bool):
                                message = FIELD_EXPLANATION.get(rule_key, rule_key)
                                if user_input.get(rule_key) != rule_value:
                                        eligible = False
                                        if rule_value is True:
                                                fail_reasons.append(f"{message},which is not satisfying")
                                        else:
                                                fail_reasons.append(f"You are {message.lower()}, which is not satisfying")
                                        
                                else:
                                        pass_reasons.append(message)
                        #str
                        else:
                                message = FIELD_EXPLANATION.get(rule_key,rule_key)

                                if user_input.get(rule_key)==rule_value:
                                        eligible= False
                                        fail_reasons.append(f"You are {message.lower()}, which is not satisfying")
                                else:
                                        pass_reasons.append(message)
                

                                       
                if eligible:
                       eligible_schemes.append({
                              "scheme_name": scheme["scheme_name"],
                              "benefit": scheme["benefit"],
                              "apply_link": scheme["apply_link"],
                              "reason":pass_reasons
                              })
                else:
                        not_eligible_schemes.append({
                                "scheme_name": scheme["scheme_name"],
                                "reason":fail_reasons
                                })

        return {
                "eligible":eligible_schemes,
                "not_eligible":not_eligible_schemes,
                }