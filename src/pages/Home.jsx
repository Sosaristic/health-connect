import React from 'react'

import AboutUs from '../components/Home/AboutUs'
import Articles from '../components/Home/Articles'
import { Hero, Testimonial, Services } from '../components/Home'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
     
      <Services />
      <Testimonial />
       <Articles />
      <Footer />
    </Layout>
  )
}
