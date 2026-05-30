import { useNavigate } from "react-router-dom";
import "./Result.css";

const FIELD_LABELS = {
    age: "Age", annual_income: "Income", loan_amount: "Loan Amount",
    highest_education: "Highest Education", is_income_tax_payer: "Income Tax",
    is_farmer: "Farmer", owns_agricultural_land: "Agricultural Land",
    owns_pucca_house: "House Ownership", has_ration_card: "Ration Card",
    is_business_owner: "Business Owner", is_student: "Student",
    is_government_employee: "Government Employee", previous_exam_passed: "Previous Exam",
};

const FormatDetail = (detail) => {
    const field = FIELD_LABELS[detail.field] || detail.field;
    if (detail.type === "numeric_min") return `${field} must be at least ${detail.limit}`;
    if (detail.type === "numeric_max") return `${field} must be at most ${detail.limit}`;
    if (detail.type === "boolean") return `${field}: Expected ${detail.expected ? "Yes" : "No"}, got ${detail.actual ? "Yes" : "No"}`;
    return "Condition not met";
};

function ResultComponent({ result }) {
    const navigate = useNavigate();

    if (!result) return (
        <div className="result-page">
            <div className="result-container">
                <div className="empty-state">
                    <p>No data found. Please submit the form first.</p>
                    <br />
                    <button className="back-btn" onClick={() => navigate("/")}>← Go Back</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="result-page">
            <div className="result-container">

                {/* Header */}
                <div className="result-header">
                    <h1>Eligibility Results</h1>
                    <div className="accent-line"></div>
                    <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>
                </div>

                {/* Summary */}
                <div className="summary-bar">
                    <div className="summary-badge eligible">
                        ✓ {result.eligible.length} Eligible Scheme{result.eligible.length !== 1 ? "s" : ""}
                    </div>
                    <div className="summary-badge not-eligible">
                        ✕ {result.not_eligible.length} Not Eligible
                    </div>
                </div>

                {/* Eligible Schemes */}
                <div className="section-gap">
                    <div className="section-title green">
                        <span className="dot green"></span>
                        Eligible Schemes
                    </div>

                    {result.eligible.length === 0
                        ? <div className="empty-state">No eligible schemes found for your profile.</div>
                        : result.eligible.map((scheme, i) => (
                            <div className="eligible-card" key={i}>
                                <h3>{scheme.scheme_name}</h3>
                                <span className="benefit-tag">🎯 Benefit</span>
                                <p className="benefit-text">{scheme.benefit}</p>
                                <a className="apply-btn" href={scheme.apply_link} target="_blank" rel="noreferrer">
                                    Apply Now →
                                </a>
                                {scheme.ai_explanation && (
                                    <div className="ai-insight">
                                        <span>🤖 AI Insight: </span>{scheme.ai_explanation}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>

                {/* Not Eligible Schemes */}
                <div className="section-gap">
                    <div className="section-title red">
                        <span className="dot red"></span>
                        Not Eligible Schemes
                    </div>

                    {result.not_eligible.length === 0
                        ? <div className="empty-state">You passed all scheme criteria!</div>
                        : result.not_eligible.map((scheme, i) => (
                            <div className="not-eligible-card" key={i}>
                                <h3>{scheme.scheme_name}</h3>
                                <div className="reason-label">Reasons</div>
                                <ul className="reason-list">
                                    {scheme.details.map((d, j) => (
                                        <li key={j}>{FormatDetail(d)}</li>
                                    ))}
                                </ul>
                                {scheme.ai_explanation && (
                                    <div className="ai-insight">
                                        <span>🤖 AI Explanation: </span>{scheme.ai_explanation}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default ResultComponent;