import React, { useState } from "react";
import "./AdminProfile.css";

const AdminProfile = () => {
    const [activeForm, setActiveForm] = useState("profile");

    return (
        <div className="admin-profile-container">

            <h2 className="title">Admin Profile & Change Password</h2>

            <div className="toggle-buttons">
                <button
                    onClick={() => setActiveForm("profile")}
                    className={activeForm === "profile" ? "active" : ""}
                >
                    Show Profile
                </button>
                <button
                    onClick={() => setActiveForm("password")}
                    className={activeForm === "password" ? "active" : ""}
                >
                    Change Password
                </button>
            </div>

            {/* Profile Form */}
            <div className={`form-container ${activeForm === "profile" ? "active" : ""}`}>
                <h3 style={{ textAlign: "center" }}>Admin Profile</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="first_name" defaultValue="" className="admin-profile-update" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="last_name" defaultValue=""  className="admin-profile-update"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" defaultValue="" className="admin-profile-update" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="text" name="contact_number" defaultValue=""  className="admin-profile-update"/>
                        </div>
                    </div>
                    <div className="form-group center">
                        <button type="submit" name="update_profile" className="update-admin-profile-info">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>

            {/* Password Change Form */}
            <div className={`form-container ${activeForm === "password" ? "active" : ""}`}>
                <h3 style={{ textAlign: "center" }}>Change Password</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password" name="current_password"  className="admin-profile-update"/>
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" name="new_password"  className="admin-profile-update"/>
                        </div>
                    </div>
                    <div className="form-group center">
                        <button type="submit" name="change_password" className="update-admin-profile-info">
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminProfile;
