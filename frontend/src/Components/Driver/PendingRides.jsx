import React from 'react'
import './PendingRides.css'

const PendingRides = () => {
  return (
    <div className='pending-rides-container'>
        <h2 className='pending-rides-heading'>Pending Rides</h2>
        <table>
                <thead>
                    <tr>
                        <th>Full Name(Passenger)</th>
                        <th>Number Plate</th>
                        <th>Pickup</th>
                        <th>Drop</th>
                        <th>Booking DateTime</th>
                        <th>Amount (₹)</th>
                        <th>Payment Mode</th>  
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Vatsal Sabhaya</td>
                    <td>GJ05FS2345</td>
                    <td>Jakatnaka</td>
                    <td>Pasodara</td>
                    <td>3/04/2006</td>
                    <td>10000</td>
                    <td>Online/Cod</td>
                    <td className='action-rides-pending'>
                        <button className="ride-accept">Accept</button>
                        <button className="ride-cancel">Cancel</button>
                    </td>
                </tbody>
            </table>        


    </div>
  )
}

export default PendingRides