import { Carousel } from "flowbite-react";
import React from "react";

const BannerSlider = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=600')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            <h2>Hello</h2>
          </div>
          <div
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/13006670/pexels-photo-13006670.jpeg?auto=compress&cs=tinysrgb&w=600')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            Slide 2
          </div>
          <div
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3874329/pexels-photo-3874329.jpeg?auto=compress&cs=tinysrgb&w=600')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSlider;
