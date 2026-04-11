import { useNavigate } from "react-router-dom";
import Slideshow from "./SideShow";
function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
            <Slideshow/>

            <div style={{ marginBottom: "40px" }}>
                <h1>
                    Find <strong>Government Schemes</strong> You're Eligible For — Instantly
                </h1>

                <p style={{ fontSize: "18px" }}>
                    Answer a few simple questions and discover all the government benefits you qualify for using AI-powered analysis.
                </p>

                <button
                    onClick={() => navigate("/form")}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        marginTop: "10px",
                        cursor: "pointer"
                    }}
                >
                    Check Eligibility
                </button>
            </div>

            <hr />

            <div style={{ margin: "40px 0" }}>
                <h2>Why is it so hard to find the right schemes?</h2>

                <ul>
                    <li>Government schemes are scattered across multiple websites</li>
                    <li>Each scheme has different eligibility rules</li>
                    <li>Most people don’t know what they actually qualify for</li>
                    <li>Thousands miss benefits they deserve</li>
                </ul>
            </div>

            <hr />

            <div style={{ margin: "40px 0" }}>
                <h2>We simplify everything for you</h2>

                <ul>
                    <li>AI analyzes your profile instantly</li>
                    <li>Find schemes you are eligible for in seconds</li>
                    <li>Clear explanation of eligibility</li>
                    <li>Direct links to apply</li>
                </ul>
            </div>

            <hr />

            <div style={{ margin: "40px 0" }}>
                <h2>How it works</h2>

                <ol>
                    <li>Fill in your basic details</li>
                    <li>System analyzes your eligibility</li>
                    <li>Get personalized scheme results</li>
                </ol>
            </div>

            <hr />

            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <h2>Start now — it takes less than a minute</h2>

                <button
                    onClick={() => navigate("/form")}
                    style={{
                        padding: "12px 25px",
                        fontSize: "18px",
                        cursor: "pointer"
                    }}
                >
                    Check Eligibility
                </button>

                <p style={{ marginTop: "10px" }}>
                    Built to simplify access to government benefits for everyone.
                </p>
            </div>

        </div>
    );
}

export default Home;