import React, { useState } from "react";
import { FaHome, FaGraduationCap, FaUsers, FaBolt, FaChartBar, FaClipboardList, FaBell, FaChevronDown } from "react-icons/fa";
import image1 from "../assets/Firstbenchlogo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "FirstGuru", icon: <FaGraduationCap /> },
    { name: "TownHall", icon: <FaUsers /> },
    { name: "AI Evaluation", icon: <FaBolt /> },
    { name: "Performance", icon: <FaChartBar /> },
    { name: "Mock Test", icon: <FaClipboardList /> },
  ];

  return (
    <nav className="bg-gray-900 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-16 w-16 mr-2" src={image1} alt="Logo" />
              <p className="text-white font-medium">Firstbench</p>
            </div>
            {/* Navbar Links */}
            <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium"
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/*  Toggle Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaChevronDown className="text-xl" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 rounded-full text-gray-400 hover:text-gray-500"
            >
              <FaBell className="text-xl" />
            </button>
            <div className="flex items-center bg-slate-800 p-1.5 rounded-md space-x-2">
              <div className="h-8 w-8 rounded-md bg-orange-300 text-white flex items-center justify-center">
                P
              </div>
              <span className="text-sm font-medium text-gray-300">Profile</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-800 px-4 py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="block text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
