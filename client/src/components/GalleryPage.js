import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Nav from './Nav';
import galleryData from '../gallerydata';
import gsap from 'gsap';

// import JP_BG from './Cherry-Blossoms.svg';
const GalleryPage = () => {
  const { id } = useParams();

  const country = galleryData.find(
    (country) => country.id === parseInt(id, 10)
  );

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${country.bg})` }}
    >
      <Nav />
      <div className="p-4 ">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img1}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img2}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img3}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img4}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img5}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img6}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img7}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img8}
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={country.img9}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
