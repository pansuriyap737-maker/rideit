import React, { useState } from "react";
import "./AdminInquiries.css";

const AdminInquiries = () => {
  const [search, setSearch] = useState("");

  // Example static data for UI only
  const inquiries = [
    {
      name: "John Doe",
      email: "john@example.com",
      subject: "Booking Inquiry",
      message: "I want to know more about your car rental options.",
      created_at: "2024-06-01 10:15:00",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Payment Issue",
      message: "My payment did not go through, please assist.",
      created_at: "2024-06-02 14:30:00",
    },
  ];

  // Filter inquiries based on search (UI only)
  const filteredInquiries = inquiries.filter((inq) =>
    [inq.name, inq.email, inq.subject, inq.message]
      .some((field) => field.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="main-content">
      <center>
        <h2 id="user-inquiries">📨 User Inquiries</h2>
      </center>

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
          placeholder="Search by name, email, subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-feild"
        />
        <button type="submit" className="search-submit">Search</button>
      </form>

      {filteredInquiries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Received At</th>
            </tr>
          </thead>
          <tbody>
            {filteredInquiries.map((inq, index) => (
              <tr key={index}>
                <td>{inq.name}</td>
                <td>{inq.email}</td>
                <td>{inq.subject}</td>
                <td>{inq.message}</td>
                <td>{inq.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">No inquiries found.</div>
      )}
    </div>
  );
};

export default AdminInquiries;
