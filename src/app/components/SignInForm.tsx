"use client";
import React from "react";

import bg from "./../../../public/images/banner-bg.8e3818308ba8e86b1d87.png";
import Navbar from "./navbar";
const SignInForm = () => {
  const HandleOnCLick = () => {
    alert("button clicked");
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center h-screen "
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="max-w-md w-full p-6 bg-greay rounded-lg shadow-md backdrop-blur-xm bg-black/30">
          <form>
            <label
              htmlFor="username"
              className="block text-white text-xm font-bold mb-1"
            >
              UserName
            </label>
            <input
              required
              placeholder="Enter UserName"
              type="text"
              className="appearance-none border-3 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline my-2 -4"
            ></input>
            <label
              htmlFor="UserEmail"
              className="block text-white text-xm font-bold mb-1"
            >
              UserEmail
            </label>
            <input
              placeholder="Enter UserEmail"
              type="text"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blackfocus:shadow-outline my-2 -4"
            ></input>
            <label
              htmlFor="Password"
              className="block text-white text-xm font-bold mb-1"
            >
              Password
            </label>
            <input
              placeholder="Enter Password"
              type="Password"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline my-2 -4"
            ></input>
            <label
              htmlFor="Password"
              className="block text-white text-xm font-bold mb-1"
            >
              ConfirmPassword
            </label>
            <input
              placeholder="Enter ConfirmPassword"
              type="Password"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline my-2 -4"
            ></input>
            <button
              className=" cursor-progress bg-blue-500 hover:bg-blue-650 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2"
              onClick={HandleOnCLick}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;