import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { LogoutButton } from "./Logout-Button";

export function AppBar() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const navigate = useNavigate(); // Initialize useNavigate

  const removeToken = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/signup"); // Navigate to signup page
  };

  return (
    <div className="border-2 border-gray-200 bg-cover bg-center bg-slate-100" >
      <ul className="flex justify-between">
        <li className="mr-3">
          <a
            className="pt-4 mt-6 inline-block border border-gray-500 
            rounded py-2  px-4 mb-5 text-white hover:bg-gray-500 m-2
            font-semibold bg-[#1D428A] "
            href="#"
          >
            Pay-Ease
          </a>
        </li>
        <div className="space-x-5 flex items-center md:order-2  m-5">
          {/* <p className="p-3 text-white bg-[#1D428A] rounded-lg font-semibold text-sm shadow-md -mt-1">
            Welcome
          </p> */}
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-2xl text-white">U</span>
          </div>
          <LogoutButton onClick={removeToken} />
        </div>
      </ul>
    </div>
  );
}
