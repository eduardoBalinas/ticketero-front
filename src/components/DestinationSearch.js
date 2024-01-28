// DestinationSearch.js
import React, { useState } from 'react';
import formatDate from '@/utils/formatDate';

const DestinationSearch = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    startDate: formatDate(new Date()),
    endDate: formatDate(new Date()),
    searchType: "destination",
    latitude: '',
    longitude: '',
    radius: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white shadow-lg rounded">
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Fecha inicio</label>
        <input
          type="date"
          min={formatDate(new Date())}
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Fecha final</label>
        <input
          type="date"
          min={formatDate(new Date())}
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Latitude</label>
        <input
          type="text"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Longitud</label>
        <input
          type="text"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Radio</label>
        <input
          type="text"
          name="radius"
          value={formData.radius}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Ciudad</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Buscar
      </button>
    </form>
  );
};

export default DestinationSearch;
