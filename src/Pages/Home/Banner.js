import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      {/* new banner */}
      <div className="">
        <section className="relative bg-[url(https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong className="block font-extrabold text-rose-700">
                  Forever Home.
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  to="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </Link>

                <Link
                  to="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* banner old */}
      <div className="flex justify-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <div className="text-3xl md:text-5xl text-red-300 font-medium">
                Reliable Price Dream Cars Great Service
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div className="lg:w-40 w-64   overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/13006670/pexels-photo-13006670.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/3874329/pexels-photo-3874329.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/3786092/pexels-photo-3786092.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-40  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-40 w-64   overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
};

export default Banner;
