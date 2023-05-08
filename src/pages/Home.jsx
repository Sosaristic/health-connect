import { Fragment, useEffect } from "react";

import AboutUs from "../components/Home/AboutUs";
import Articles from "../components/Home/Articles";
import { Hero, Testimonial, Services } from "../components/Home";
// import Layout from "../components/Layout/MainLayout";
// import Footer from "../components/Layout/Footer";
// import { BASE_URL } from "../utils/constant";
import useAxios from "../hooks/useAxiosPrivate";
import useRefreshToken from "../hooks/useRefreshToken";
import  { axiosInstance } from "../utils/axios";




export default function Home() {
    const axiosPrivate = useAxios()
    const refresh = useRefreshToken();
  
  useEffect(()=>{
    (async()=>{
      console.log({axiosPrivate})
       const {data} = await axiosInstance.get(`/doctors/all`)
       console.log({doctor:data});
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
