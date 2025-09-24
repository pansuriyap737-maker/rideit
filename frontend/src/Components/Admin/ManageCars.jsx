import React from "react";
import "./ManageCars.css";

const ManageCars = ({ cars }) => {
    // Format date as dd-mm-yyyy hh:mm AM/PM
    const formatDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    };

    return (
        <div className="car-list-container">
            <h3 id="car-list-heading">Car List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Car Name</th>
                        <th>Seating</th>
                        <th>City</th>
                        <th>Amount (₹)</th>
                        <th>Number Plate</th>
                        <th>Pickup</th>
                        <th>Drop</th>
                        <th>User</th>
                        <th>Booking DateTime</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars && cars.length > 0 ? (
                        cars.map((car, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={car.car_image}
                                        alt="Car"
                                        className="car-image"
                                    />
                                </td>
                                <td>{car.car_name}</td>
                                <td>{car.seating}</td>
                                <td>{car.city}</td>
                                <td>₹{car.amount}</td>
                                <td>{car.number_plate}</td>
                                <td>{car.pickup_location}</td>
                                <td>{car.drop_location}</td>
                                <td>{car.user_name}</td>
                                <td>{formatDateTime(car.date_time)}</td>
                                <td>
                                    {/* Uncomment and implement edit functionality if needed */}
                                    {/* <a href={`/edit_car/${car.car_id}`} className="edit-link">Edit</a> */}
                                    <a
                                        href="#"
                                        className="delete-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (
                                                window.confirm(
                                                    "Are you sure you want to delete this car?"
                                                )
                                            ) {
                                                // Implement delete logic here
                                            }
                                        }}
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="11" className="no-cars">
                                No cars found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCars;
