import { useState } from "react";

const PerformerSearch = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        searchType: "performer",
        performerId: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };
    
    
    return(
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white shadow-lg rounded">
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Performer ID</label>
        <input
          type="text"
          name="performerId"
          value={formData.performerId}
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
}

export default PerformerSearch;