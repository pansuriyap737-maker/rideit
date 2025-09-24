import React from 'react'
import './EditRide.css'

const EditRide = () => {
  return (
    <div className='editride-container'>
      <div className='editride-form'>
        <h2 id='edit-ride-heading'>Edit Trip</h2>
        <form action="" id='editride-form'>

          <label htmlFor="editpickup">Pick-Up</label>
          <input type="text" id='editpickup'/>

          <label htmlFor="editdrop">Drop</label>
           <input type="text" id='editdrop'/>
           
          <label htmlFor="editamount">Amount</label>
          <input type="text" name="shareamount" id="editamount" className='addtripsame' />

          <label htmlFor="editdateandtime">Booking Date & Time</label>
          <input type="datetime-local" name='dateandtime' id='editdateandtime' className='addtripsame' />

          <label htmlFor="editcarimg">Car Image</label>
          <input type="file" name='carimg' className='addtripsame' />

          <label htmlFor="editcarname">Car Name</label>
          <input type="text" id='editcarname' name='carname' className='addtripsame' />

          <label htmlFor="editcarnumberplate">Car Number Plate</label>
          <input type="text" id='editcarnumberplate' name='carnumberplate' className='addtripsame' />

          <button id='editride-btn' type='submit'>Edit Trip</button>
        </form>
      </div>
    </div>
  )
}

export default EditRide