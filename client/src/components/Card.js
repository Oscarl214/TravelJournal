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
      <h1 className="flex justify-center flex-wrap text-center text-4xl text-black font-bold mt-6">
        Click on the Country's name to see some of my favorite photos from each
        trip.
      </h1>
      <div className="card-container">
        {travelData.map((country) => (
          <div
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w3xl ="
          >
            <img
              className="object-cover rounded-t-lg  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
              src={country.imageUrl}
              style={{ height: '100%', maxWidth: '100%' }}
              alt=""
              key={country.id}
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-9 text-lg font-semibold tracking-tight text-gray-600">
                <a href={country.googleMapsUrl}>
                  <IoLocationSharp className="text-3xl text-red-500" /> View on
                  Google Maps
                </a>
              </h5>
              <Link to={`gallery/${country.id}`} key={country.id}>
                <h1 className="font-bold text-3xl mb-4">{country.country} </h1>
              </Link>
              <h6 className="text-lg">
                {country.startDate} - {country.endDate}
              </h6>
              <h6 className="text-2xl mt-4">Age: {country.age}</h6>
              <p className="mb-3 font-semibold text-lg text-gray-700 mt-5">
                {country.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
