import React from 'react'
import './Shareride.css'

const Shareride = () => {
  return (
    <div className='shareride-container'>
      <div className='shareride-form'>
        <h2 id='ride-share-heading'>ADD TRIP</h2>
        <form action="" id='addtrip-form'>
          <label htmlFor="shareuser">Username</label>
          <input type="text" id='shareuser' name='username' className='addtripsame' />

          <label htmlFor="sharepickup">Pick-Up</label>
          <input type="text" id='sharepickup'/>

          <label htmlFor="sharedrop">Drop</label>
           <input type="text" id='sharedrop'/>
           
          <label htmlFor="shareamount">Amount</label>
          <input type="text" name="shareamount" id="amountshare" className='addtripsame' />

          <label htmlFor="dateandtime">Booking Date & Time</label>
          <input type="datetime-local" name='dateandtime' id='dateandtime' className='addtripsame' />

          <label htmlFor="sharecarimg">Car Image</label>
          <input type="file" name='carimg' className='addtripsame' />

          <label htmlFor="sharecarname">Car Name</label>
          <input type="text" id='sharecarename' name='carname' className='addtripsame' />

          <label htmlFor="sharecarnumberplate">Car Number Plate</label>
          <input type="text" id='sharecarnumberplate' name='carnumberplate' className='addtripsame' />

          <button id='addtrip-btn' type='submit'>Add Trip</button>
        </form>
      </div>
    </div>
  )
}

export default Shareride