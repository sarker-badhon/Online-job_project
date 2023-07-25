import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-blue-950 text-white sticky top-0 z-50">
      <div className="navbar-start ml-8 flex items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-blue-950 rounded-box w-52"
          >
            {/* Mobile menu items */}
            <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
              It Work
            </Link>
            <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
              Job
            </Link>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-2xl font-bold">Online Job</a>

        {/* Desktop menu items */}
        <ul className="hidden lg:flex justify-center items-center ml-16">
          <Link className="mr-8 font-bold sm:hover:bg-slate-800 hover:text-white px-4 py-3">
            <li>It Work</li>
          </Link>
          <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
            <li>Job</li>
          </Link>
        </ul>
      </div>

      <div className="navbar-end text-white">
        <Link className="mr-3 font-bold">Login</Link>
        <Link className="mr-3 font-bold">Sign Up</Link>
        <Link className="btn font-bold">Post Job</Link>
      </div>
    </div>
  );
};

export default Navbar;
