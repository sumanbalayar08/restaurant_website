import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        Our establishment offers an exceptional dining experience, 
        with a commitment to culinary excellence that ensures unforgettable 
        flavors with each dish. We prioritize using locally sourced, fresh
        ingredients to guarantee the highest quality and to support our community.
        Our dedicated team provides exceptional service, making your visit memorable. 
        </p>
        <p>
        Our diverse menu caters to all preferences, from classic favorites to innovative
        creations. Explore the changing seasons with our unique seasonal specials. 
        For special occasions, we offer private dining options and catering services. 
        We're proud to be an active part of the community, supporting local causes that matter to you. 
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
