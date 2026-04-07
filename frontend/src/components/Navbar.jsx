import React from "react";
import logo from "../assets/shortlink.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-12">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex gap-4">
              <span>Dashboard</span>
              <span>Analytics</span>
              <span>Links</span>
            </div>
          </div>
          <div className="gap-4 flex">
            <Link to="/auth" className="px-8 py-2 bg-white shadow rounded">
              login
            </Link>

            <Link
              to="/auth/new"
              className="px-6 py-2 bg-[#004ac6] text-white rounded"
            >
              logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
