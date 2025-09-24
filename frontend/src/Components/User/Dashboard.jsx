import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <h1 className='welcome'>👋 Welcome, parth!</h1>
             <div className='dashboard-info'>
                    <div className="dash-card">
                        <h1>50</h1>
                        <p>Total Cars</p>
                    </div>
                    <div className="dash-card">
                        <h1>20</h1>
                        <p>Area Covered</p>
                    </div>
                    <div className="dash-card">
                        <h1>A+</h1>
                        <p>Rating</p>
                    </div>
                    <div className="dash-card">
                        <h1>0</h1>
                        <p>Your Trips</p>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard
