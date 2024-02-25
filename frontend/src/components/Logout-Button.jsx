import { useNavigate } from "react-router-dom";
import React from "react";
export function LogoutButton({ onClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClick(); // Call the function passed from parent component
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/"); // Navigate to signup page
  };

  return (
        <button
        onClick={handleLogout}
        type="button"
        className="mt-3 h-10 text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
        px-8 py-2 rounded-full text-center mb-2 font-medium text-sm md:px-10 md:py-2 space-x-2 md:space-x-4 md:w-auto"
      >
        <span className="space-x-5"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="gap-10 h-6 w-6 space-x-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      
  );
}
