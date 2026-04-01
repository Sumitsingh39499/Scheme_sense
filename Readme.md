AI-Powered Government Scheme Eligibility Engine

A data-driven platform that helps Indian citizens quickly identify which government welfare schemes they are eligible for by analyzing their personal information and applying structured eligibility rules.

The system evaluates multiple schemes automatically and provides users with clear explanations and official application links.

Problem

Government welfare schemes in India are distributed across multiple portals and government websites. Each scheme has different eligibility rules, making it difficult for citizens to determine which benefits they qualify for.

Many people who are eligible for welfare programs never apply simply because they are unaware of them or cannot easily verify their eligibility.

Solution

This project provides a platform where users can input their personal details and instantly check their eligibility for multiple government schemes.

The system:

Collects basic user information

Evaluates eligibility conditions for different schemes

Returns eligible and non-eligible schemes

Explains the reasoning behind each result

Provides official links to apply

An AI component can also generate human-readable explanations for eligibility decisions.

Supported Government Schemes

The platform currently evaluates eligibility for the following schemes:

Pradhan Mantri Awas Yojana

PM Kisan Samman Nidhi

Ayushman Bharat

Pradhan Mantri Mudra Yojana

National Scholarship Portal

These schemes cover housing, agriculture, healthcare, business support, and education.

Features

Multi-scheme eligibility evaluation

Structured rule-based eligibility engine

Data-driven scheme configuration

AI-generated eligibility explanations

Clear eligibility reasoning

Official application links for each scheme

User Input Fields

The platform collects the following information from users.

Personal Information

Age

Gender

State

Annual Income

Category (SC/ST/OBC/General/Minority)

Location Type (Urban / Rural)

Housing Information

Owns House

House Type

Farmer Information

Farmer Status

Land Ownership

Land Size

Income Tax Payer

Government Employee

Business Information

Business Owner

Loan Amount Required

Startup Stage

Student Information

Student Status

Class Level

Board Exam Percentage

Previous Exam Passed

Health Scheme Information

Ration Card Status

Occupation Type

System Output

After evaluating user inputs, the system returns:

Eligible Schemes

Example:

PM Kisan Samman Nidhi
Benefit: ₹6000 per year
Reason: User occupation is farmer and user is not a taxpayer
Apply Link: https://pmkisan.gov.in

Not Eligible Schemes

Example:

Pradhan Mantri Awas Yojana
Reason: Income exceeds eligibility limit

Eligibility Logic

The system evaluates structured eligibility conditions for each scheme.

Example logic rules:

PM Kisan Samman Nidhi
is_farmer == true
AND
owns_agricultural_land == true
AND
is_government_employee == false
AND
is_income_tax_payer == false
Pradhan Mantri Awas Yojana

Urban Eligibility

age >= 18
AND
owns_pucca_house == false
AND
annual_income <= 1800000

Income categories:

EWS : income ≤ 3 lakh

LIG : income ≤ 6 lakh

MIG1 : income ≤ 12 lakh

MIG2 : income ≤ 18 lakh

Rural Eligibility

location_type == rural
AND
owns_pucca_house == false
AND
house_type != pucca
Ayushman Bharat
annual_income <= 300000
AND
has_ration_card == true
Pradhan Mantri Mudra Yojana
age >= 18
AND
is_business_owner == true
AND
loan_amount_requested <= 1000000

Loan categories:

Shishu: loan ≤ 50,000

Kishore: 50,000 – 5,00,000

Tarun: 5,00,000 – 10,00,000

National Scholarship Portal

Pre-Matric Scholarship

student_status == true
AND
class_level >= 1
AND
class_level <= 10
AND
annual_income <= 100000
AND
category IN (SC, ST, OBC, Minority)

Post-Matric Scholarship

student_status == true
AND
class_level >= 11
AND
previous_exam_passed == true
AND
annual_income <= 250000

Merit-Based Scholarship

student_status == true
AND
class_level >= 11
AND
board_exam_percentage >= 80
AND
annual_income <= 800000
System Architecture
User fills form
        ↓
Frontend Application
        ↓
Backend API
        ↓
Eligibility Engine
        ↓
Scheme Dataset (schemes.json)
        ↓
Eligible schemes returned
        ↓
AI explanation generator
Project Structure
gov-scheme-eligibility-ai
│
├── data
│   └── schemes.json
│
├── backend
│   └── eligibility_engine.py
│
├── frontend
│
└── README.md
Technology Stack

Frontend
HTML / CSS / JavaScript (or React)

Backend
Python (Flask / FastAPI)

Data Layer
JSON-based scheme dataset

AI Explanation Layer
LLM-based reasoning for eligibility explanations

Deployment
Backend hosting and frontend deployment platforms.

Future Improvements

Support for 100+ government schemes

Automatic scheme data updates

Multi-language support for rural users

Voice-based interaction

Mobile-friendly interface

Integration with official government APIs

License