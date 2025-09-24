import React from "react";
import "./RideDetail.css";

const RideDetails = ({ cars }) => {
    return (
        <div className="ride-list-container">
            <h3 id="ride-list-heading">Car List</h3>
            <input type="search" placeholder="Search by Location, Number Plate and Car Name" className="ride-search"/>
            <button className="ride-search-btn">Search</button>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Car Name</th>
                        <th>Number Plate</th>
                        <th>Seating Capacity</th>
                        <th>Pickup</th>
                        <th>Drop</th>
                        <th>Booking DateTime</th>
                        <th>Amount (₹)</th>  
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Car Image</td>
                    <td>Lambo</td>
                    <td>GJ05FS2345</td>
                    <td>5</td>
                    <td>Jakatnaka</td>
                    <td>Pasodara</td>
                    <td>3/04/2006</td>
                    <td>10000</td>
                    <td>
                        <button className="edit-btn-rides">Edit</button>
                        <button className="delete-btn-rides">Delete</button>
                    </td>
                </tbody>
            </table>
        </div>
    );
};

export default RideDetails;
