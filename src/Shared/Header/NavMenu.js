import React from "react";
import "./NavMenu.css";
import { TbSteeringWheel } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Avatar, Dropdown } from "flowbite-react";

const NavMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      {/* Desktop menu */}
      <div className="hidden md:block">
        <div className="text-[#571F22] flex justify-between items-center gap-2 py-4">
          <div className="flex justify-center items-center text-3xl ml-4">
            <TbSteeringWheel />
            <Link to="/">
              <h2 className="ml-1">AUTOLINE'S</h2>
            </Link>
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
            {!user?.uid ? (
              <div className="flex justify-center items-center gap-2 text-white font-medium">
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
            ) : (
              <>
                <div className="flex justify-center items-center gap-2 text-white font-medium">
                  <Link
                    className="bg-[#591726] hover:bg-[#AF485D] px-4 py-1 rounded-md"
                    onClick={handleSignOut}
                  >
                    LogOut
                  </Link>
                </div>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img={user?.photoURL}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block hover:text-cyan-300 truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>

                  <Link to="/dashboard">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="block md:hidden">
        <div className="text-gray-800 flex justify-between items-center gap-2 py-4">
          <div className="flex justify-center items-center text-xl ml-2">
            <TbSteeringWheel />
            <h2 className="ml-1">
              <Link to="/">AUTOLINE'S</Link>
            </h2>
          </div>
          <div>
            <Link to="/mobile-nav">
              <FaBars className="mr-2 text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
