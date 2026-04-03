from openai import OpenAI

client = OpenAI()

def generate_ai_explanation(user_input, scheme_name, fail_reasons):
    client = OpenAI()
    prompt = f"""
You are an assistant that explains government scheme eligibility in simple terms.

User Data:
{user_input}

Scheme:
{scheme_name}

Failed Conditions (structured):
{fail_reasons}

Instructions:
- Explain in 1-2 clear sentences
- Be specific (mention actual values like income)
- Do not use technical terms like "numeric_max"
- Be human-friendly

Output:
Only return the explanation.
"""

    try:
        response = client.chat.completions.create(
            model="gpt-5.3",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3   
        )

        return response.choices[0].message.content.strip()

    except Exception as e:
        return "You are not eligible due to failing one or more criteria."