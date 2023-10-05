import React from 'react';

import { GiWorld } from 'react-icons/gi';

const Nav = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <GiWorld className="text-3xl text-white m-4" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {' '}
              <h2>O's Travel Journal</h2>
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
