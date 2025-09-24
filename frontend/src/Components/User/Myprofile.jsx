import React from 'react'
import './Myprofile.css'
const Myprofile = () => {
  return (
    <div className='profile'>
        <div className="profile-container">
        <div className='profile-update'>
            <h1 id='profile-heading'>My Profile</h1>
            <form action="">
                <label htmlFor="update-name">Name:</label>
                <input type="text" id='update-name'/>

                <label htmlFor="update-email">Email:</label>
                <input type="email" id='update-email' />

                <button id='update-btn'>Update Profile</button>
            </form>
        </div>

        <div className='password-update'>
            <h1 id='change-password'>Change Password</h1>
            <form action="">
                <label htmlFor="current-password">Current Password:</label>
                <input type="password" id='current-password'/>

                <label htmlFor="new-password">New Password:</label>
                <input type="password" id='new-password'/>

                <label htmlFor="confirm-new-password">Confirm New Password:</label>
                <input type="password" id='confirm-new-password'/>

                <button id='update-btn'>Update Password</button>
            </form>
        </div>
        </div>

        <button id='logout-btn'>Log Out</button>
    </div>
  )
}

export default Myprofile