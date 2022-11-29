import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 w-4/5 mx-auto">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-5xl font-bold text-gray-50 uppercase">
            Welcome To Autolines
          </h1>
          <p className="py-6 text-gray-300 font-semibold">
            Sell your car get right value and buy your dream car!!!
          </p>
          <Link to="/register">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
