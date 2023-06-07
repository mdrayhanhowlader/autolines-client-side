import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const MobileNavMenu = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center w-full mx-auto">
        <nav className="">
          <ul className="flex flex-col justify-center items-center gap-8 capitalize font-medium ">
            <li>
              <Link className="hover:text-rose-600" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-rose-600" to="/new-cars">
                New Cars
              </Link>
            </li>
            <li>
              <Link className="hover:text-rose-600" to="/used-cars">
                Used Cars
              </Link>
            </li>
            <li>
              <Link className="hover:text-rose-600" to="/upcoming">
                Upcoming
              </Link>
            </li>
            <li>
              <Link className="hover:text-rose-600" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pt-4 flex flex-col justify-center items-center gap-8 text-md">
        <div className="flex flex-col justify-center items-center gap-4">
          <MdOutlineFavoriteBorder className="text-lg" />
          <HiOutlineShoppingCart className="text-lg" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-white font-medium">
          <Link
            className="bg-gray-800 hover:bg-gray-400 px-4 py-1 rounded-md"
            to="/register"
          >
            SignUp
          </Link>{" "}
          <Link
            className="bg-[#591726] hover:bg-[#AF485D] px-4 py-1 rounded-md"
            to="/login"
          >
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
