import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar text-white flex flex-wrap justify-center ">
        <Link className="block m-2 lg:inline-block lg:mx-4">Home</Link>
        <Link className="block m-2 lg:inline-block lg:mx-4">Resources</Link>
        <Link className="block m-2 lg:inline-block lg:mx-4">Employee</Link>
        <Link className="block m-2 lg:inline-block lg:mx-4">Find Jobs</Link>
        <Link className="block m-2 lg:inline-block lg:mx-4">About</Link>
      </div>
    </div>
  );
};

export default Header;
