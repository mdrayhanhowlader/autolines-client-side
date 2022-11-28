import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="text-2xl font-semibold text-primary">
            Autolines
          </Link>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Autolines™" year={2022} />
      </div>
    </Footer>
  );
};

export default Bottom;
