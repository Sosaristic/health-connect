import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/images/hero.png'
import { successHistory } from '../../data'

export default function Hero() {
  return (
    <div className='w-full flex flex-col items-center bg-secondary min-h-screen '>
      <div className='w-full flex flex-col md:flex-row  md:items-center md:w-[80%] md:h-[80vh]'>
        <div className='p-4 flex flex-col gap-4 items-center'>
         <h1 className='text-[2.5rem] font-jost font-bold text-primary md:text-[3.5rem]'>Your Health is Our Top Priority </h1>
          <div>
            <p className='text-[1.2rem] text-gray-600  font-inter'>Our skilled doctor have tremendous experience with wide range of disease to serve the needs of our patients</p>
          </div>
          <Link className='w-fit py-2 text-center md:self-start md:text-[1.2rem] bg-primary px-4 text-white rounded-md'>
            Book Appointment
          </Link>
        </div>
        <div className='w-full h-[20rem] md:h-full relative flex items-center'>
          <div className='w-[60%] h-[60%]  bg-primary rounded-[50%] border-none absolute z-0  translate-x-1/2'></div>
          <img src={HeroImg} alt='' className='h-full w-full object-contain absolute z-[2]' />
        </div>
      </div>
      <div className='w-[80%] md:w-full md:bg-primary z-[2] flex justify-center -translate-y-[.5rem] md:translate-y-0 md:h-[20vh]'>
      <div className='w-[80%] bg-primary  flex flex-col justify-between md:flex-row gap-2 items-center '>
       {successHistory.map((success,i)=>(
          <div key={i} className='w-[70%] md:w-[20%] p-4 flex flex-col items-center text-center'>
          <h3 className='text-[2rem] md:text-[2.5rem] text-white font-jost'>{success.value}</h3>
          <p className='text-white md:text-[1.5rem]'>{success.name}</p> 
        </div>
       ))}
      </div>
      </div>


    </div>
  )
}