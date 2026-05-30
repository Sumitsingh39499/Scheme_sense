import { useNavigate } from "react-router-dom";
import Slideshow from "./SideShow";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Slideshow />

            {/* Hero */}
            <div className="hero-section">
                <h1>Find <strong>Government Schemes</strong> You're Eligible For — Instantly</h1>
                <p>Answer a few simple questions and discover all the government benefits you qualify for using AI-powered analysis.</p>
                <button className="btn-primary" onClick={() => navigate("/form")}>
                    Check Eligibility
                </button>
            </div>

            <hr className="divider" />

            {/* Problem Section */}
            <div className="card-section">
                <h2>Why is it so hard to find the right schemes?</h2>
                <div className="card-grid">
                    <div className="card">Government schemes are scattered across multiple websites</div>
                    <div className="card">Each scheme has different eligibility rules</div>
                    <div className="card">Most people don't know what they qualify for</div>
                    <div className="card">Thousands miss benefits they deserve</div>
                </div>
            </div>

            <hr className="divider" />

            {/* Solution Section */}
            <div className="card-section">
                <h2>We simplify everything for you</h2>
                <div className="card-grid">
                    <div className="card">AI analyzes your profile instantly</div>
                    <div className="card">Find schemes in seconds</div>
                    <div className="card">Clear explanation of eligibility</div>
                    <div className="card">Direct links to apply</div>
                </div>
            </div>

            <hr className="divider" />

            {/* How it works */}
            <div className="steps-section">
                <h2>How it works</h2>
                <ol className="steps-list">
                    <li>Fill in your basic details</li>
                    <li>System analyzes your eligibility</li>
                    <li>Get personalized scheme results</li>
                </ol>
            </div>

            <hr className="divider" />

            {/* CTA */}
            <div className="cta-section">
                <h2>Start now — it takes less than a minute</h2>
                <button className="btn-primary btn-large" onClick={() => navigate("/form")}>
                    Check Eligibility
                </button>
                <p>Built to simplify access to government benefits for everyone.</p>
            </div>
        </div>
    );
}

export default Home;