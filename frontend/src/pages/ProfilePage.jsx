import React from "react";
import profile from "../assets/profile.png";
import { IoMdLink } from "react-icons/io";
import { Link } from "react-router";

function ProfilePage() {
  return (
    <>
      <main className="min-h-screen bg-[#F3F4F6] pt-24 pb-12">
        <div className="px-90">
          <h1 className="text-xl mt-4 font-medium text-[#64748b]">
            Account Management
          </h1>
        </div>

        <div className="px-90 mt-8">
          <form className="bg-white p-8 rounded">
            <h1 className="text-2xl font-medium">Profile</h1>

            <div className="mt-4 flex">
              <img src={profile} alt="userProfile" />
              <div>
                <h1 className="font-bold text-xl mt-4">Alex Thompson</h1>
                <h2 className="text-[#434655]">
                  Product Architect at Digital Flow
                </h2>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-10 rounded border-[#b4c5ff] bg-[#f3f4f5] p-6 w-full">
                <div className="flex items-center gap-4">
                  <p className="text-[#94a3b8] font-medium">EMAIL ADDRESS</p>
                </div>
                <p>User@example.com</p>
              </div>

              <div className="mt-10 rounded border-[#b4c5ff] bg-[#f3f4f5] p-6 w-full">
                <div className="flex items-center gap-4">
                  <p className="text-[#94a3b8] font-medium">ACCOUNT TENURE</p>
                </div>
                <p>Member since: January 1, 2026</p>
              </div>
            </div>

            <div className="mt-10 rounded bg-[#004ac6] p-6 flex items-center">
              <div className="bg-blue-400 w-12 rounded p-2">
                <IoMdLink className="w-8 h-8 text-white" />
              </div>

              <div className="ml-4">
                <h1 className="text-white">ACTIVE ASSETS</h1>
                <p className="text-white font-bold text-xl">12</p>
              </div>

              <Link>
                <div className="ml-100 rounded bg-blue-400 px-4 py-2">
                  <h1 className="text-white">VIEW LINKS</h1>
                </div>
              </Link>
            </div>

            <button className="flex items-center gap-2 mt-6 w-full bg-[#f8fafc] rounded px-74 py-2 cursor-pointer">
              <p className="text-center">Logout Session</p>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;
