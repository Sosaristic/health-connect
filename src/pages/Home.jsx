import React from "react";
import { Hero, Testimonial } from "../components/Home";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Testimonial />
    </Layout>
  );
}
