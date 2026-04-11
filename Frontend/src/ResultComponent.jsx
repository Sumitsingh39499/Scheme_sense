import { useNavigate } from "react-router-dom";

const FIELD_LABELS = {
    age: "Age",
    annual_income: "Income",
    loan_amount: "Loan Amount",
    highest_education: "Highest Education",
    is_income_tax_payer: "Income tax",
    is_farmer: "Farmer",
    owns_agricultural_land: "Agricultural Land",
    owns_pucca_house: "House ownership",
    has_ration_card: "Ration card",
    is_business_owner: "Business owner",
    is_student: "Student",
    is_government_employee: "Government employee",
    previous_exam_passed: "previous exam",
};

const FormatDetail = (detail) => {
    const field = FIELD_LABELS[detail.field] || detail.field;

    if (detail.type === "numeric_min") {
        return ` ${field} must be at least ${detail.limit}`;
    }

    if (detail.type === "numeric_max") {
        return `${field} must be at most ${detail.limit}`;
    }

    if (detail.type === "boolean") {
        return `Expected ${field}:${detail.expected ? "Yes" : "No"}, but got ${detail.actual ? "Yes" : "No"}`;
    }

    return "Condition failed";

};

function ResultComponent({ result }) {
    const navigate = useNavigate();
    <div>if (!result) return <p>No data found. Please submit form first.</p>;
        <button onClick={() => navigate("/")} > Back</button>
    </div>


    return (
        <div style={{ padding: "20px" }}>
            <h1>Eligibility Results</h1>

            <button onClick={() => navigate("/")}>← Back to Form</button>

            <hr />


            <h2 style={{ color: "green" }}>Eligible Schemes</h2>

            {result.eligible.length === 0 && <p>No eligible schemes found</p>}

            {result.eligible.map((scheme, i) => (
                <div
                    key={i}
                    style={{
                        background: "#d4edda",
                        padding: "15px",
                        margin: "10px 0",
                        borderRadius: "8px"
                    }}
                >
                    <h3>{scheme.scheme_name}</h3>
                    <p><strong>Benefit:</strong> {scheme.benefit}</p>

                    <a href={scheme.apply_link} target="_blank" rel="noreferrer">
                        Apply Now
                    </a>

                    {scheme.ai_explanation && (
                        <p><strong>AI Insight:</strong> {scheme.ai_explanation}</p>
                    )}
                </div>
            ))}

            <hr />

            <h2 style={{ color: "red" }}> Not Eligible Schemes</h2>

            {result.not_eligible.length === 0 && <p>No failed schemes</p>}

            {result.not_eligible.map((scheme, i) => (
                <div
                    key={i}
                    style={{
                        background: "#f8d7da",
                        padding: "15px",
                        margin: "10px 0",
                        borderRadius: "8px"
                    }}
                >
                    <h3>{scheme.scheme_name}</h3>

                    <p><strong>Reason:</strong></p>
                    <ul>
                        {scheme.details.map((d, j) => (
                            <li key={j}>{FormatDetail(d)}</li>
                        ))}
                    </ul>

                    {scheme.ai_explanation && (
                        <p><strong>AI Explanation:</strong> {scheme.ai_explanation}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ResultComponent;