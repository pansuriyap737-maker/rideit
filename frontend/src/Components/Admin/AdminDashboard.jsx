import "./AdminDashboard.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Bookings Growth",
            data: [12, 19, 25, 30, 45],
            backgroundColor: "rgba(0, 123, 255, 0.7)",
            borderRadius: 8,
        },
    ],
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">

            <div className="welcome-message">👋 Welcome back, Admin!</div>

            {/* Stats Boxes */}
            <div className="stats-container">
                <div className="stat-box">
                    <h3 className='system-info'>Total Users</h3>
                    <p className='system-info-data'>5</p>
                </div>
                <div className="stat-box">
                    <h3 className='system-info'>Total Payments</h3>
                    <p className='system-info-data'>10,000</p>
                </div>
                <div className="stat-box">
                    <h3 className='system-info'>Total Cars</h3>
                    <p className='system-info-data'>13</p>
                </div>
            </div>

            {/* Chart */}
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>

            {/* Buttons */}
            <div className="admin-buttons">
                <NavLink to="/admin/admin_dashboard/admin_profile" className='admin-info'>👤 Profile</NavLink>
                <NavLink to="/admin/manage_user" className='admin-info'>👥 Manage Users</NavLink>
                <NavLink to="/admin/admin_dashboard/admin_inquiries" className='admin-info'>📨 Inquiry</NavLink>
                <NavLink to="/admin/user_payment" className='admin-info'>💳 Verify Payment</NavLink>
            </div>
        </div>
    );
};

export default AdminDashboard