import { useState } from "react";
import {useNavigate} from "react-router-dom";
function Form({setResult}) {
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        age: "",
        income: "",
        loanAmount: "",
        education: "",
        incomeTax: false,
        farmer: false,
        agriculturalLand: false,
        puccaHouse: false,
        rationCard: false,
        businessOwner: false,
        student: false,
        governmentEmployee: false,
        previousExamPassed: false
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;

        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/check-eligibility", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
            setLoading(true)
            const data = await response.json();

            setResult(data);
            setLoading(false)
            navigate("/result");
            console.log("api response:",data);


        }
        catch (error) {
            console.error("Error:", error)
        }

        
    };

    return (<form onSubmit={handleSubmit}>
        <h2>Scheme Eligibilty Form</h2>
        <label > Age <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} /></label>
        <label> Annual Income <input type="number" name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange} /></label>
        <label> Loan Amount <input type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleChange} /></label>
        <label> Highest Education <input type="Text" name="education" placeholder="Highest Education" value={formData.education} onChange={handleChange} /></label>
        <label> <input type="checkbox" name="incomeTax" checked={formData.incomeTax} onChange={handleCheckbox} /> Do you pay Income tax?</label>
        <label> <input type="checkbox" name="agriculturalLand" checked={formData.agriculturalLand} onChange={handleCheckbox} /> Do you own agricultural land?</label>
        <label> <input type="checkbox" name="rationCard" checked={formData.rationCard} onChange={handleCheckbox} /> Do you have Ration card?</label>
        <label> <input type="checkbox" name="puccaHouse" checked={formData.puccaHouse} onChange={handleCheckbox} /> Do you own pucca House?</label>
        <label> <input type="checkbox" name="businessOwner" checked={formData.businessOwner} onChange={handleCheckbox} /> Do you own any business?</label>
        <label> <input type="checkbox" name="student" checked={formData.student} onChange={handleCheckbox} /> Are you Studing?</label>
        <label> <input type="checkbox" name="governmentEmployee" checked={formData.governmentEmployee} onChange={handleCheckbox} /> Are you a government employee?</label>
        <label> <input type="checkbox" name="previousExamPassed" checked={formData.previousExamPassed} onChange={handleCheckbox} /> Did you passed your previousExam?</label>

        <br /><br />

        <button type="submit">Submit
            {loading ? "Checking..." : "Submit"}
        </button>

    </form>
    );
}

export default Form;