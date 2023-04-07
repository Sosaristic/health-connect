import React from 'react'
import { Hero, Testimonial } from '../components/Home'
import AboutUs from '../components/Home/AboutUs'
import Articles from '../components/Home/Articles'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Articles />
      <Testimonial />
      <Footer />
    </Layout>
  )
}
