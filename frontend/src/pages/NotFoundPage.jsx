import React from "react";
import Footer from "../components/Footer";
import { FaLinkSlash } from "react-icons/fa6";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F3F4F6] pt-24 pb-12">
        <div className="w-42 h-42 rounded-full bg-[#eae2e2] mx-auto p-9 text-[#F3F4F6]">
          <FaLinkSlash className="w-24 h-24" />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-[#004ac6] text-center mt-4">
            404
          </h1>
          <h1 className="text-2xl font-bold text-center mt-2">
            Page Not Found
          </h1>
          <p className="text-center mt-2">
            The page you're looking for doesn't exist. It may
          </p>
          <p className="text-center">
            have been moved, deleted, or the link might be
          </p>
          <p className="text-center">broken.</p>
        </div>

        <div className="flex gap-4 mb-4 ml-144">
          <Link to="/dashboard">
            <button className="flex items-center gap-2 mt-6 text-white bg-[#004ac6] rounded px-6 py-2 cursor-pointer">
              <p>{"<-"} Go to Dashboard</p>
            </button>
          </Link>

          <button className="flex items-center gap-2 mt-6 rounded px-10 py-2 cursor-pointer shadow">
            <p className="text-[#004ac6]">Report an Issue</p>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
