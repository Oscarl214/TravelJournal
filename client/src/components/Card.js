import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const Card = (props) => {
  return (
    <div className="card-container">
      <div
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w3xl ="
      >
        <img
          className="object-cover rounded-t-lg  md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
          src={props.countryInfo.imageUrl}
          style={{ height: '100%', maxWidth: '100%' }}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-9 text-lg font-semibold tracking-tight text-gray-600">
            <a href={props.countryInfo.googleMapsUrl}>
              <IoLocationSharp className="text-3xl text-red-500" /> View on
              Google Maps
            </a>
          </h5>
          <h1 className="font-bold text-3xl mb-4">
            {props.countryInfo.country}
          </h1>
          <h6 className="text-lg">
            {props.countryInfo.startDate} - {props.countryInfo.endDate}
          </h6>
          <h6 className="text-lg mt-4">My age</h6>
          <p className="mb-3 font-normal text-lg text-gray-700 mt-5">
            {props.countryInfo.description}
          </p>
        </div>
      </div>
      <img src="./Line 16.png" className="mb-8" />
    </div>
  );
};

export default Card;
