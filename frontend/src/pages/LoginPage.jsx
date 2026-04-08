import React, { useState } from "react";
import logo from "../assets/shortlink.png";
import { Link, useNavigate } from "react-router";
import google from "../assets/google.png";
import { useForm } from "react-hook-form";
import http from "../lib/http";

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError("");

    try {
      const body = await http("/api/login", null, {
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      });

      if (!body.success) {
        throw new Error(body.message || "Login gagal");
      }

      localStorage.setItem("token", body.result.token);
      alert("Login berhasil!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Register error!");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#F3F4F6]">
        <div className="w-full flex justify-center pt-12">
          <img src={logo} alt="logo" />
        </div>

        <div className="bg-white w-100 mt-6 ml-142 p-6 rounded-xl shadow">
          <h1 className="text-xl font-bold">Welcome back</h1>
          <p>Please enter your details to sign in</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mt-6">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="input your mail"
                className="border border-[#c3c6d7] rounded w-88 p-2"
                {...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <label htmlFor="password">Password</label>
                <Link
                  to=""
                  className="text-[#004ac6] font-medium hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="border border-[#c3c6d7] rounded w-88 p-2"
                {...register("password", {
                  required: "Password wajib diisi",
                  minLength: {
                    value: 4,
                    message: "Password minimal 4 karakter",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <button className="bg-[#004ac6] text-white px-6 py-2 rounded mt-6 w-88">
              Submit
            </button>

            {/* OR */}
            <div className="flex items-center mt-6">
              <hr className="grow border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">
                OR CONTINUE WITH
              </span>
              <hr className="grow border-gray-300" />
            </div>

            <button
              type="button"
              className="flex-1 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 w-88 shadow my-6"
            >
              <img src={google} alt="google" className="mr-2" />
              Sign in with Google
            </button>
          </form>
        </div>

        <p className="ml-160 mt-6">
          Don't have an account?{" "}
          <Link to="/auth/new" className="hover:text-blue-600">
            Sign up
          </Link>
        </p>
      </main>
    </>
  );
}

export default LoginPage;
