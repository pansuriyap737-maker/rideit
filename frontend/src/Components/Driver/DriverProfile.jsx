import React from 'react'
import './DriverProfile.css'

const DriverProfile = () => {
  return (
    <div className='driver-profile'>
        <div className="driver-profile-container">
        <div className='driver-profile-update'>
            <h1 id='driver-profile-heading'>My Profile</h1>
            <form action="">
                <label htmlFor="driver-update-name">Name:</label>
                <input type="text" id='driver-update-name'/>

                <label htmlFor="driver-update-email">Email:</label>
                <input type="email" id='driver-update-email' />

                <button id='driver-update-btn'>Update Profile</button>
            </form>
        </div>

        <div className='driver-password-update'>
            <h1 id='driver-change-password'>Change Password</h1>
            <form action="">
                <label htmlFor="driver-current-password">Current Password:</label>
                <input type="password" id='driver-current-password'/>

                <label htmlFor="driver-new-password">New Password:</label>
                <input type="password" id='driver-new-password'/>

                <label htmlFor="driver-confirm-new-password">Confirm New Password:</label>
                <input type="password" id='driver-confirm-new-password'/>

                <button id='driver-update-btn'>Update Password</button>
            </form>
        </div>
        </div>

        <button id='logout-btn'>Log Out</button>
    </div>
  )
}

export default DriverProfile