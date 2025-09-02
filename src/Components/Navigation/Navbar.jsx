import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/specialist", label: "Specialists" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo and nav */}
        <Link
          to="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
        >
          <FaEye size={40} className="gap-10px text-pink-600 p-1 m-1" />
          <h1 className="text-2xl font-bold text-pink-600">
            DIVINE VISION CENTRE
          </h1>
        </Link>

        <nav
          className="hidden md:flex space-x-6"
          aria-label="Primary navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200
              focus:outline-none focus:ring-pink-600 focus:rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:block" aria-label="Appointment booking">
          <a
            href="#appointment"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full 
        transition-colors duration-200 shadow-md focus:outline-none focus:ring-2
        focus:ring-pink-800 focus:ring-offset-2"
          >
            Schedule your visit
          </a>
        </nav>
      </div>

      {/* Mobile menu should appear outside the main container but still inside header */}
      {menuOpen && (
        <aside
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4"
          aria-label="Mobile menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="block text-gray-700 hover:text-pink-600 
                transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:rounded"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
