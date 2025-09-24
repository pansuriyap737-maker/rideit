import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import './Adminheader.css'

const Adminheader = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setSidebarActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
     <button
        className="toggle-btn"
        onClick={() => setSidebarActive(!sidebarActive)}
        ref={toggleBtnRef}
        aria-label="Toggle Menu"
      >
        ☰ Menu
      </button>
      <nav className={`sidebar ${sidebarActive ? "active" : ""}`} ref={sidebarRef}>
        <br /> <br />
        <NavLink to="/admin/admin_dashboard" activeClassName="active" exact className='adminheader'>
          📊 Dashboard
        </NavLink>
        <NavLink to="/admin/manage_user" activeClassName="active" className='adminheader'>
          👥 Manage Users
        </NavLink>
        <NavLink to="/admin/manage_cars" activeClassName="active" className='adminheader'>
          🚗 Manage Cars
        </NavLink>
        <NavLink to="/admin/manage_driver" activeClassName="active" className='adminheader'>
           👥 Manage Driver
        </NavLink>
        <NavLink to="/admin/user_payment" activeClassName="active" className='adminheader'>
          💳 User Payments
        </NavLink>
        <NavLink to="/logout" activeClassName="active" className='adminheader'>
          🚪 Logout
        </NavLink>
      </nav>
    </>
  );
};
export default Adminheader;
