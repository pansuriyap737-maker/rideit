import React from 'react'
import './DriverBookings.css'

const DriverBookings = () => {
  return (
   <div className='booking-rides-container'>
        <h2 className='booking-rides-heading'>Bookings</h2>
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
                </tbody>
            </table>        


    </div>
  )
}

export default DriverBookings