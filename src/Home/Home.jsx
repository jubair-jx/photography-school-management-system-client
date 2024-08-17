import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner/Banner";
import Contact from "../components/Home/Contact/Contact";
import Featured from "../components/Home/Featured/Featured";
import PopularClasses from "../components/Home/PopularClasses/PopularClasses";
import PopularInstructor from "../components/Home/PopularInstructor/PopularInstructor";
import Testimonial from "../components/Home/Testimonial/Testimonial";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className=" container mx-auto">
      <Helmet>
        <title>WRS || Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Featured />
      <Testimonial></Testimonial>
      <Contact />
    </div>
  );
};

export default Home;
