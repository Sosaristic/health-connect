import { Fragment, useEffect } from "react";

import AboutUs from "../components/Home/AboutUs";
import Articles from "../components/Home/Articles";
import { Hero, Testimonial, Services } from "../components/Home";
import Layout from "../components/Layout/MainLayout";
import Footer from "../components/Layout/Footer";
import { API_URL } from "../constant";


export default function Home() {
  
  useEffect(()=>{
    (async()=>{
       const response = await fetch(`${API_URL}/api/v1/doctors/all`)
       const data = await response.json();
       console.log({data});
    })()
  },[])
   
 
  return (
    <Fragment>  
      <Hero />
      <Services />
      <AboutUs />
      <Testimonial />
      <Articles />
    </Fragment>
  );
}
