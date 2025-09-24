import React, { useState } from 'react'
import './Bookrides.css'
import user from '../../assets/Lambo.jpg';

const Bookrides = () => {
  return (
    <div className='rides-container'>
        <form action="GET" id='rides-search'>
            <select name="Pick Up" id="pickup" className='location'>
                <option value="">Pickup Location</option>
            </select>

            <select name="Drop" id="drop" className='location'>
                <option value="">Drop Location</option>
            </select>

            <input type="date" id='date' className='location'/>
            <button id='search-rides' className='location'>Search</button>
        </form>

        <div className="rides-info">
          <div className='rides-card'>
              <img src={user} alt="car photo" className='car-photos'/>
              <h2 id='car-title'>Lambo</h2>
              <p id='pickup-loc'>Pickup : Pasodara</p>
              <p id='drop-loc'>Drop : Jakatnaka</p>
              <h3 id='pricetag'>₹150</h3>
              <p id='capacity'>Seating Capacity : 3</p>
              <button id="ride-book">Book Now</button>
          </div>
          
        </div>
    </div>
  )
}

export default Bookrides