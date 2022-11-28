import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold text-green-700 dark:text-white">
            Autolines
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user?.uid ? (
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
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>

              <Link to="/dashboard">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <></>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/blogs">Blogs</Link>
          </Navbar.Link>
          {user?.uid ? (
            <>
              <Navbar.Link>
                <Link onClick={handleSignOut}>Sign Out</Link>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to="/login">Login</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/register">Register</Link>
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
