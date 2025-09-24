import React from 'react'
import './About.css'
import { NavLink, useParams } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-container'>
            <section className='about-section'>
                <h1>About Us</h1>
                <p id='summary'>Tripool is an innovative carsharing platform designed to make travel more efficient, affordable, and sustainable. Whether you're a car owner looking to earn extra income or a passenger needing a ride, Tripool connects people to create a smarter transport ecosystem.</p>

                <div className='goal'>
                    <div className="goal-card">
                        <h4>🚗 Our Mission</h4>
                        <p>To simplify car sharing by providing a secure and user-friendly platform for both riders and car owners.</p>
                    </div>
                    <div className="goal-card">
                        <h4>🌍 Our Vision</h4>
                        <p>Reduce environmental impact through shared mobility and build a community of responsible users.</p>
                    </div>
                    <div className="goal-card">
                        <h4>🤝 Our Values</h4>
                        <p>Trust, safety, community, and innovation guide everything we do at Tripool.</p>
                    </div>
                </div>

                 <div className='info'>
                    <div className="info-card">
                        <h1>52</h1>
                        <p>Total Cars</p>
                    </div>
                    <div className="info-card">
                        <h1>20</h1>
                        <p>Cities Covered</p>
                    </div>
                    <div className="info-card">
                        <h1>A+</h1>
                        <p>Start Rating</p>
                    </div>
                </div>

                 <button ><NavLink to="/contact" className="contact-button">Contact Us</NavLink></button>
            </section>
        </div>
    )
}

export default About