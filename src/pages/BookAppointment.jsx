import React from 'react'
import { Link } from 'react-router-dom'

export default function BookAppointment() {
  return (
    <div className='min-h-[80vh]'>
      <h2>BookAppointment</h2> 
      <Link to={'/dashboard/doctor'}>Doctor</Link>
    
    </div>
  )
}
