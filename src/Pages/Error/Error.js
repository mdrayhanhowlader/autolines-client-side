import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="w-5/5 mx-auto text-center">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000"
          alt=""
        />
        <br />
        <Link className="bg-cyan-700 font-semibold px-8 py-4 rounded-lg" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
