import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Home.css';
import lambo from '../../assets/Lambo.jpg';

const Home = () => {
  return (
    <div className="home-container">

        <img src={lambo} alt="" className='cover-img'/>

      {/* Hero Section */}
      <section className="hero-section">
        <h2 id='welcome-para'>Welcome to RideIt - Carsharing System</h2>
        <p>
          We help connect car owners with people who need rides. Safe, smart, and sustainable travel.
        </p>

        {/* Features Section */}
        <div className="features">
          <div className="feature-card">
            <h4>✅ Easy Car Booking</h4>
            <p>Book cars with just a few clicks.</p>
          </div>
          <div className="feature-card">
            <h4>✅ Trusted</h4>
            <p>All cars are verified for safe journeys.</p>
          </div>
          <div className="feature-card">
            <h4>✅ Affordable Rides</h4>
            <p>Lower your travel costs with shared rides.</p>
          </div>
        </div>

        <button className="join-button"><NavLink to='/register' className='regi'>Join Now</NavLink></button>
      </section>
    </div>
  );
};

export default Home;
