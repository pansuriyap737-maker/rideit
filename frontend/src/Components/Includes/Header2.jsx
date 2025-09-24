import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import log from '../../assets/log.png';
import './Header.css'

const Header2 = () => {
    return (
   <div className='header'>
            <div>
                <NavLink to='/'><img src={log} alt="" className='logo' /></NavLink>
            </div>
            <div>
                <NavLink to="/driver/share_ride" className="nav">Ride Share</NavLink>
                <NavLink to="/driver/ride_details" className="nav">Ride Details</NavLink>
                <NavLink to="/driver/pending_rides" className="nav">Pending Rides</NavLink>
                <NavLink to="/driver/driver_bookings" className="nav">My Bookings</NavLink>
                <NavLink to="/driver/driver_profile" className="nav">My Profile</NavLink>
            </div>

        </div>
    )
}

export default Header2