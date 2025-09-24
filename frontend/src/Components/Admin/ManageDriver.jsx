import React, { useState } from "react";
import "./ManageUser.css";

const ManageDriver = () => {
    const [search, setSearch] = useState("");

    // Example static data for UI only
    const users = [
        {
            name: "Alice Johnson",
            email: "alice@example.com",
            contact: "123-456-7890",
            created_at: "2024-05-15T10:30:00",
        },
        {
            name: "Bob Smith",
            email: "bob@example.com",
            contact: "987-654-3210",
            created_at: "2024-04-20T14:45:00",
        },
    ];

    // Filter users based on search (UI only)
    const filteredUsers = users.filter((user) =>
        [user.name, user.email, user.contact]
            .some((field) => field.toLowerCase().includes(search.toLowerCase()))
    );

    // Format date as dd-mm-yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="user-info-container">
            <h2>Manage Driver</h2>

            <div className="top-bar">
                <form
                    className="search-bar"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // No backend, so no action here
                    }}
                >
                    <input
                        type="text"
                        name="search"
                        placeholder="Search name, email, or contact"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-user"
                    />
                    <button type="submit" className="search-user-btn">Search</button>
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Registered Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{formatDate(user.created_at)}</td>
                                <td><button className="diactivate">Diactivate</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="no-users">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageDriver;
