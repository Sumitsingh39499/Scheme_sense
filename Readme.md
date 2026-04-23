# SchemeSense 🏛️

Find all government schemes you qualify for in seconds — no confusion, no manual searching.

## About
SchemeSense is a smart eligibility engine that helps Indian citizens instantly identify 
which government welfare schemes they are eligible for based on their personal and 
financial details.

## Features
- Multi-scheme eligibility detection
- Rule-based decision engine
- AI-generated eligibility explanations
- Direct official application links
- Structured and scalable scheme dataset

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React |
| Backend | Python, FastAPI |
| Data Layer | JSON |
| AI Layer | LLM-based explanation generator |

## Supported Schemes
- Pradhan Mantri Awas Yojana
- PM Kisan Samman Nidhi
- Ayushman Bharat
- Pradhan Mantri Mudra Yojana
- National Scholarship Portal

## How It Works
1. User enters personal details (income, occupation, category, etc.)
2. Backend processes input through a rule-based eligibility engine
3. System evaluates multiple schemes from a JSON dataset
4. Returns eligible/ineligible schemes with clear reasoning
5. AI layer converts logic into human-readable explanations

## Getting Started
```bash
# Clone the repository
git clone https://github.com/Sumitsingh39499/Scheme_sense

# Install backend dependencies
pip install -r requirements.txt

# Run the backend
uvicorn main:app --reload

# Install frontend dependencies
cd frontend
npm install
npm start
```

## License
MIT
