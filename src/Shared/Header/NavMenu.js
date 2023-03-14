import React from "react";
import "./NavMenu.css";
import { TbSteeringWheel } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      {/* Desktop menu */}
      <div className=" text-gray-800 flex justify-between items-center gap-2 py-4">
        <div className="flex justify-center items-center text-3xl ml-4">
          <TbSteeringWheel />
          <h2 className="ml-1">AUTOLINE'S</h2>
        </div>
        <div className="text-center w-full mx-auto">
          <nav className="">
            <ul className="flex justify-center items-center gap-8 capitalize font-medium ">
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
        <div className="mr-4 flex justify-center items-center gap-8 text-md">
          <div className="flex justify-center items-center gap-4">
            <MdOutlineFavoriteBorder className="text-lg" />
            <HiOutlineShoppingCart className="text-lg" />
          </div>
          <div className="flex justify-center items-center gap-2 text-white font-medium">
            <Link
              className="bg-gray-800 hover:bg-teal-400 px-4 py-1 rounded-md"
              to="/register"
            >
              SignUp
            </Link>{" "}
            <Link
              className="bg-rose-500 hover:bg-red-500 px-4 py-1 rounded-md"
              to="/login"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
