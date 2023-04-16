import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookingPage() {
    const params = useParams()
    
  return (
    <div className='min-h-[80vh]'>BookingPage {params.id}</div>
  )
}
