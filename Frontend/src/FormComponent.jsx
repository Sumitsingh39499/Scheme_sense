import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ setResult }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        age: "", income: "", loanAmount: "", education: "",
        incomeTax: false, farmer: false, agriculturalLand: false,
        puccaHouse: false, rationCard: false, businessOwner: false,
        student: false, governmentEmployee: false, previousExamPassed: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
const response = await fetch(`${import.meta.env.VITE_API_URL}/check-eligibility`, {    
     headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    age: Number(formData.age),
                    annual_income: Number(formData.income),
                    loan_amount: Number(formData.loanAmount),
                    highest_education: formData.education,
                    is_income_tax_payer: formData.incomeTax,
                    is_farmer: formData.farmer,
                    owns_agricultural_land: formData.agriculturalLand,
                    owns_pucca_house: formData.puccaHouse,
                    has_ration_card: formData.rationCard,
                    is_business_owner: formData.businessOwner,
                    is_student: formData.student,
                    is_government_employee: formData.governmentEmployee,
                    previous_exam_passed: formData.previousExamPassed,
                })
            });
            const data = await response.json();
            setResult(data);
            navigate("/result");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const checkboxItems = [
        { name: "incomeTax", label: "Pay Income Tax?" },
        { name: "agriculturalLand", label: "Own Agricultural Land?" },
        { name: "rationCard", label: "Have Ration Card?" },
        { name: "puccaHouse", label: "Own Pucca House?" },
        { name: "businessOwner", label: "Own a Business?" },
        { name: "student", label: "Currently Studying?" },
        { name: "governmentEmployee", label: "Government Employee?" },
        { name: "previousExamPassed", label: "Passed Previous Exam?" },
    ];

    return (
        <div className="form-page">
            <div className="form-card">
                <div className="form-header">
                    <h2>Scheme Eligibility Form</h2>
                    <p>Fill in your details to find schemes you qualify for</p>
                    <div className="accent-line"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-section-title">Personal Details</div>
                    <div className="input-grid">
                        <div className="input-group">
                            <label>Age</label>
                            <input type="number" name="age" placeholder="e.g. 25"
                                value={formData.age} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Annual Income (₹)</label>
                            <input type="number" name="income" placeholder="e.g. 250000"
                                value={formData.income} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Loan Amount (₹)</label>
                            <input type="number" name="loanAmount" placeholder="e.g. 100000"
                                value={formData.loanAmount} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Highest Education</label>
                            <input type="text" name="education" placeholder="e.g. Graduate"
                                value={formData.education} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-section-title">Your Profile</div>
                    <div className="checkbox-grid">
                        {checkboxItems.map(({ name, label }) => (
                            <label className="checkbox-item" key={name}>
                                <input type="checkbox" name={name}
                                    checked={formData[name]} onChange={handleCheckbox} />
                                {label}
                            </label>
                        ))}
                    </div>

                    <button className="submit-btn" type="submit" disabled={loading}>
                        {loading ? (
                            <span className="loading-text">
                                <span className="spinner"></span> Checking Eligibility...
                            </span>
                        ) : "Check My Eligibility →"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;