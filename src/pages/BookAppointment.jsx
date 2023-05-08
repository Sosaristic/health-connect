import React from 'react'
import { AppointmentHeader, SpecialistCard } from '../components/BooKAppointment'
export default function BookAppointment() {
  return (
    <div className='w-[95%] md:w-[80%] mx-auto p-2 md:p-6 mt-6 '>
      <AppointmentHeader />
      <section className='flex flex-wrap justify-center gap-4 mt-8 mb-4'>
        
        {Array.from({length: 6}, (item, id)=>< SpecialistCard key={id} id={id}/>)}
      </section>
    </div>
  )
}
