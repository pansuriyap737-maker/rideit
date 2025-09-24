import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './Header.css'
import log from '../../assets/log.png';


const Header = () => {
    return (
        <div className='header'>
            <div>
                <NavLink to='/'><img src={log} alt="" className='logo'/></NavLink> 
            </div>
            <div>
                <NavLink to="/" className="nav">Home</NavLink>
                <NavLink to="/about" className="nav">About</NavLink>
                <NavLink to="/contact" className="nav">Contact</NavLink>
                <NavLink to="/login" className="nav">Login</NavLink>
                <NavLink to="/register" className="nav">Register</NavLink>
            </div>

        </div>
    )
}

export default Header