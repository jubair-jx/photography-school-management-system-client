import React from "react";
import Banner from "../components/Home/Banner/Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../components/Home/PopularClasses/PopularClasses";
import PopularInstructor from "../components/Home/PopularInstructor/PopularInstructor";
import Testimonial from "../components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>WRS || Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
