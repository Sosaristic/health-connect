import React from 'react'
import { Hero, Testimonial } from '../components/Home'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Testimonial />
      <Footer />
    </Layout>
  )
}
