import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <Footer container={true}>
      <div className="w-4/5 mx-auto text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-lg md:text-3xl uppercase font-semibold text-cyan-300"
          >
            Autolines
          </Link>
          <Footer.LinkGroup>
            <Footer.Link>
              <Link to="/blogs">Blogs</Link>
            </Footer.Link>
            <Footer.Link>
              <Link to="/blogs">About us</Link>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="AUTOLINES™" year={2022} />
      </div>
    </Footer>
  );
};

export default Bottom;
