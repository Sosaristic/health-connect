import React from 'react'
import { AppointmentHeader, SpecialistCard } from '../components/BooKAppointment'
export default function BookAppointment() {
  return (
    <main className='px-4 '>
      <AppointmentHeader />
      <section className='flex flex-wrap justify-center gap-4 mt-8 mb-4'>
        
        {Array.from({length: 6}, ()=><SpecialistCard />)}
      </section>
    </main>
  )
}
