import React, { useState } from 'react';
import './UserPayment.css';

const UserPayments = () => {
    const [search, setSearch] = useState('');

    // Dummy data for UI demonstration
    const payments = [
        {
            user_name: 'John Doe',
            driver_name: 'Tony',
            car_name: 'Toyota Camry',
            number_plate: 'ABC-1234',
            razorpay_payment_id: 'pay_29QQoUBi66xm2f',
            payment_status: 'Completed',
        },
        {
            user_name: 'Jane Smith',
            driver_name: 'Thor',
            car_name: 'Honda Civic',
            number_plate: 'XYZ-5678',
            razorpay_payment_id: 'pay_39RRpUBi77xm3g',
            payment_status: 'Pending',
        },
    ];

    // Filter payments based on search input (for UI only)
    const filteredPayments = payments.filter((p) =>
        p.user_name.toLowerCase().includes(search.toLowerCase()) ||
        p.driver_name.toLowerCase().includes(search.toLowerCase()) ||
        p.car_name.toLowerCase().includes(search.toLowerCase()) ||
        p.number_plate.toLowerCase().includes(search.toLowerCase()) ||
        p.razorpay_payment_id.toLowerCase().includes(search.toLowerCase()) ||
        p.payment_status.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="user-payments-container">
            {/* You can replace this with your AdminHeader component */}
            {/* <AdminHeader /> */}

            <center>
                <h2 className="title">User  Payment Details</h2>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form"
                >
                    <input
                        type="text"
                        placeholder="Search by user, car, plate, payment ID, status"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                <table className="payments-table">
                    <thead>
                        <tr>
                            <th>Full Name(Passanger)</th>
                            <th>Full Name(Driver)</th>
                            <th>Car Name</th>
                            <th>Number Plate</th>
                            <th>Payment Mode</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.length > 0 ? (
                            filteredPayments.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.user_name}</td>
                                    <td>{row.driver_name}</td>
                                    <td>{row.car_name}</td>
                                    <td>{row.number_plate}</td>
                                    <td>Online</td>
                                    <td>{row.payment_status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="no-results">
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default UserPayments;