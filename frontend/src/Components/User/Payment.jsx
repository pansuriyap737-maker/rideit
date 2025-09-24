import React from 'react'
import './Payment.css'

const Payment = () => {
    return (
        <div className='payment-container'>
            <h1 id='payment-heading'>My Bookings</h1>
            <table className='userpanel-tabel'>
                <tr>
                    <th className='user-payment'>Full Name(Driver)</th>
                    <th className='user-payment'>Car No.Plate</th>
                    <th className='user-payment'>Pick-up</th>
                    <th className='user-payment'>Drop</th>
                    <th className='user-payment'>Amount</th>
                    <th className='user-payment'>Phone No.</th>
                    <th className='user-payment'>Payment Mode</th>
                    <th className='user-payment'>Action</th>
                </tr>

                <tr>
                    <td className='user-ride-data'>Parth Pansuriya</td>
                    <td className='user-ride-data'>GJ05sf3876</td>
                    <td className='user-ride-data'>Pasodara</td>
                    <td className='user-ride-data'>Jakatnaka</td>
                    <td className='user-ride-data'>10000</td>
                    <td className='user-ride-data'>7862893655</td>
                    <td className='user-ride-data'>COD/Online</td>
                    <td className='user-ride-data'><button className='cancel-passenger'>Cancel</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Payment