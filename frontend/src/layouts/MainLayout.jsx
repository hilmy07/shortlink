import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
