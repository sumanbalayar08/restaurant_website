import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-white font-semibold text-6xl">
        Where Every Bite Tells a Delicious Story.
        </h1>
        <p className=" text-white">
        Join us for a culinary adventure that combines tradition with innovation, and savor the taste of exceptional hospitality. Come hungry, leave delighted!"
        </p>
        <div className=" lg:pl-44">
          <button className="px-2 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
