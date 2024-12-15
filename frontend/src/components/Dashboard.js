import React from "react";

// Dummy icons for visualization
import { FaCreditCard, FaMoneyBillAlt, FaChartLine, FaUserCircle } from "react-icons/fa";

function Dashboard() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>AI Credit Advisor</h1>
            <p>Welcome to your dashboard. Manage your financial health with ease!</p>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
                <div style={{ textAlign: "center" }}>
                    <FaCreditCard size={50} />
                    <h3>Credit Score</h3>
                    <p>Monitor and improve your credit score with personalized insights.</p>
                </div>
                
                <div style={{ textAlign: "center" }}>
                    <FaMoneyBillAlt size={50} />
                    <h3>Bill Payments</h3>
                    <p>Keep track of your bill payments and avoid late fees.</p>
                </div>
                
                <div style={{ textAlign: "center" }}>
                    <FaChartLine size={50} />
                    <h3>Financial Planning</h3>
                    <p>Get recommendations for budgeting and investing to secure your future.</p>
                </div>
                
                <div style={{ textAlign: "center" }}>
                    <FaUserCircle size={50} />
                    <h3>Profile</h3>
                    <p>Manage your personal information and settings.</p>
                </div>
            </div>

            <div style={{ marginTop: "40px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
                <h2>Key Features</h2>
                <ul>
                    <p>Real-time Credit Score Tracker</p>
                    <p>Personalized Financial Tips</p>
                    <p>Track Your Spending and Savings</p>
                    <p>Goal Setting for Financial Milestones</p>
                    <p>Access to Credit Reports and Analytics</p>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
