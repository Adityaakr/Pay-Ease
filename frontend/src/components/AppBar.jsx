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
    <div className="border-2 border-gray-200">
      <ul className="flex justify-between">
        <li className="mr-3">
          <a
            className="pt-4 mt-6 inline-block border border-gray-500 
            rounded py-2 px-4 text-white hover:bg-gray-500 m-5 
            font-semibold bg-gray-800 "
            href="#"
          >
            Pay-Ease
          </a>
        </li>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-5">
          <p className="p-3 text-black font-semibold text-sm shadow-md -mt-1">
            Hello, {name}
          </p>
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-2xl text-white">{id}</span>
          </div>
          <LogoutButton onClick={removeToken} />
        </div>
      </ul>
    </div>
  );
}
