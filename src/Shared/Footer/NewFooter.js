import React from "react";
import { TbSteeringWheel } from "react-icons/tb";
import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <div className="bg-[#1F2937]">
      {/* footer top  */}
      <div className="h-56 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 ">
        <div>
          <div className="flex items-center text-3xl text-white md:ml-8">
            <TbSteeringWheel />
            <Link to="/">
              <h2 className="ml-1">AUTOLINE'S</h2>
            </Link>
          </div>
        </div>
        <div className="text-white">
          <ul className="list-disc text-red-600">
            <li>
              <Link to="/" className="text-white">
                Listings
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <ul className="list-disc text-red-600">
            <li>
              <Link to="/blogs" className="text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Our team
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white md:mr-8 flex flex-col justify-center items-center">
          <h2 className="text-xl">
            <a href="tel:+8801308761440">(+880) 1308-761-440</a>
          </h2>
          <h4 className="text-lg">
            <a href="mailto:rhowlader5314@gmail.com">rhowlader5314@gmail.com</a>
          </h4>
          <h6 className="text-md">Faridabad Dhaka - 1204, Dhaka Bangladesh </h6>
        </div>
      </div>
      <div className="text-center text-slate-400 text-sm font-small border-t border-slate-500 md:w-3/5 mx-auto">
        <p className="py-8">
          Copyright © 2022. All rights reserved by Autoline's.
        </p>
      </div>
    </div>
  );
};

export default NewFooter;
