import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import * as emoji from 'node-emoji';
import travelData from '../data.js';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav.js';
const Card = () => {
  return (
    <div>
      <Nav />
      <div className="card-container">
        {travelData.map((country) => (
          <Link to={`gallery/${country.id}`} key={country.id}>
            <div
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w3xl ="
            >
              <img
                className="object-cover rounded-t-lg  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
                src={country.imageUrl}
                style={{ height: '100%', maxWidth: '100%' }}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-9 text-lg font-semibold tracking-tight text-gray-600">
                  <a href={country.googleMapsUrl}>
                    <IoLocationSharp className="text-3xl text-red-500" /> View
                    on Google Maps
                  </a>
                </h5>
                <h1 className="font-bold text-3xl mb-4">{country.country} </h1>
                <h6 className="text-lg">
                  {country.startDate} - {country.endDate}
                </h6>
                <h6 className="text-2xl mt-4">
                  My age when I visited: {country.age}
                </h6>
                <p className="mb-3 font-semibold text-lg text-gray-700 mt-5">
                  {country.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
