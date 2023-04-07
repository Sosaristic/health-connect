import React, { Fragment } from 'react'
import AboutUsImg from '../../assets/images/AboutUs.png'

const AboutUs = () => {
  return (
    <Fragment>
      <section id="aboutUs" className="w-full p-6">
        <div className="w-full p-6 flex flex-col md:flex-row items-center gap-10">
          <div className=" flex ">
            <img src={AboutUsImg} alt="about us" />
          </div>
          <div className="flex flex-col lg:w-[50%] w-full gap-6 pr-2">
            <h3
              className="uppercase relative font-bold font-jost text-[1.3rem] 
      before:block before:absolute before:w-[12%] before:h-[3px]
       before:bg-primary before:bottom-0 mb-4"
            >
              About us
            </h3>
            <p className="text-[1rem] text-gray-600 font-inter text-justify">
              Our mission is to provide patients with the ability to schedule
              appointments with the best healthcare professionals, anytime,
              anywhere. With Health Connect, patients have access to a
              comprehensive list of doctors and medical practitioners who
              specialize in various fields, ensuring that they receive the best
              possible care for their specific medical needs.
            </p>
            <button
              type="button"
              className="w-fit py-3 text-center md:self-start md:text-[1.2rem] bg-primary px-4 text-white rounded-md"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default AboutUs
