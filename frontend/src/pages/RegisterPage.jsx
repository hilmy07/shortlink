import React from "react";
import logo from "../assets/shortlink.png";
import { Link } from "react-router";

function RegisterPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F3F4F6]">
        <div className="w-full flex justify-center pt-12">
          <img src={logo} alt="logo" />
        </div>

        <div className="text-center mt-6">
          <h1 className="text-xl font-bold">Create Account</h1>
          <p>Join the elite architects of the web</p>
        </div>

        <div className="bg-white w-100 mt-4 ml-142 px-6 py-2 rounded-xl shadow">
          <form action="">
            {/* Email */}
            <div className="mt-6">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="input your mail"
                className="border border-[#c3c6d7] rounded w-88 p-2"
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border border-[#c3c6d7] rounded w-88 p-2"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="password"
                className="border border-[#c3c6d7] rounded w-88 p-2"
              />
            </div>

            <button className="bg-[#004ac6] text-white px-6 py-2 rounded mt-6 mb-4 w-88">
              Sign Up
            </button>

            <p className="mb-6 text-center">
              By signing up, you agree to our{" "}
              <span className="text-[#004ac6] hover:text-blue-500 cursor-pointer">
                Terms of Service{" "}
              </span>
              and{" "}
              <span className="text-[#004ac6] hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>

        <p className="ml-160 mt-6">
          Already have account?{" "}
          <Link to="/auth" className="hover:text-blue-600">
            Sign in
          </Link>
        </p>
      </main>
    </>
  );
}

export default RegisterPage;
