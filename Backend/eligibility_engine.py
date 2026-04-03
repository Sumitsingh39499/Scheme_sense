import json 

file_path = "../Data/schemes.json"

with open(file_path,'r') as file:
        schemes=json.load(file)


def check_eligibility(user_input):
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
                                user_value = user_input.get(user_key, 0)

                                if user_value < rule_value:
                                        eligible = False
                                        fail_reasons.append({
                                                "type": "numeric_min",
                                                "field": user_key,
                                                "user_value": user_value,
                                                "limit": rule_value
                                        })

                                else:
                                     pass_reasons.append({
                                                "type": "numeric_min_pass",
                                                "field": user_key
                                        })

                        #max
                        elif rule_key.endswith('_max'):
                                user_key=rule_key.replace('_max','')
                                user_value=user_input.get(user_key,0)
                                if user_value>rule_value:
                                        eligible = False
                                        fail_reasons.append({
                                        "type": "numeric_max",
                                        "field": user_key,
                                        "user_value": user_value,
                                        "limit": rule_value
                                })

                                        
                                else:
                                        pass_reasons.append({
                                                "type": "numeric_max_pass",
                                                "field": user_key
                                        })

                        #bool
                        elif isinstance(rule_value, bool):
                                user_value=user_input.get(rule_key)
                                if user_value != rule_value:
                                        eligible = False
                                        fail_reasons.append({
                                                "type": "boolean",
                                                "field": rule_key,
                                                "expected": rule_value,
                                                "actual": user_value
                                        })
                                else:
                                        pass_reasons.append({
                                                "type": "numeric_min_pass",
                                                "field": rule_key
                                        })
                        #str
                        else:
                                user_value=user_input.get(rule_key)
                                if user_value!=rule_value:
                                        eligible= False
                                        fail_reasons.append({
                                                "type": "boolean",
                                                "field": rule_key,
                                                "expected": rule_value,
                                                "actual": user_value
                                        })
                                else:
                                        pass_reasons.append({
                                                "type": "numeric_min_pass",
                                                "field": rule_key
                                        })
                

                                       
                if eligible:
                       eligible_schemes.append({
                              "scheme_name": scheme["scheme_name"],
                              "benefit": scheme["benefit"],
                              "apply_link": scheme["apply_link"],
                              "details":pass_reasons
                              })
                else:
                        not_eligible_schemes.append({
                                "scheme_name": scheme["scheme_name"],
                                "details":fail_reasons
                                })

        return {
                "eligible":eligible_schemes,
                "not_eligible":not_eligible_schemes
                }