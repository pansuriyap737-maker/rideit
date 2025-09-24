import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import log from '../../assets/log.png';
import user from '../../assets/userlogo.jpg';
import './Header.css'

const Header1 = () => {
    return (
        <div className='header'>
            <div>
                <NavLink to='/'><img src={log} alt="" className='logo' /></NavLink>
            </div>
            <div>
                <NavLink to="/user/dashboard" className="nav">Dashboard</NavLink>
                <NavLink to="/user/bookrides" className="nav">Book Rides</NavLink>
                <NavLink to="/user/bookings" className="nav">My Bookings</NavLink>
                <img src={user} alt="" className='user-profile-logo'/>
            </div>

        </div>
    )
}

export default Header1