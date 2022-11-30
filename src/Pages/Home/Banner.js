import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div class="flex justify-center "></div>
      <div class="flex justify-center  ">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div class="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <div class="text-3xl md:text-5xl text-red-300 font-medium">
                Reliable Price Dream Cars Great Service
              </div>
            </div>
            <div class="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/13006670/pexels-photo-13006670.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/3874329/pexels-photo-3874329.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    class=""
                  />
                </div>
                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/3786092/pexels-photo-3786092.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    class=""
                  />
                </div>
              </div>
              <div class="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    class=""
                  />
                </div>
                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    class=""
                  />
                </div>
              </div>
              <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class=""
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
