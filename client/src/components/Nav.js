import React from 'react';
import { GiWorld } from 'react-icons/gi';

const Nav = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <GiWorld className="text-lg text-white m-4" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              <h2>Travel Journal</h2>
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
