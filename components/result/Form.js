import axios from "axios";
import React from "react";
import { useState } from "react";

const Form = ({ setResult, setError }) => {
  const [searchBy, setSearchBy] = useState("");
  const [formData, setFormData] = useState({
    registerNumber: "",
    rollNumber: "",
    dob: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/search-candidate", {
        searchBy,
        ...formData,
      });

      if (!data.success) {
        setError(data.message);
        return;
      }
      setResult(data.candidate);
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch candidate data."
      );
      setResult(null);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="text-left">
        <label className="block font-semibold mb-1">Search By</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          onChange={(e) => {
            setSearchBy(e.target.value);
            setFormData({ ...formData, registerNumber: "", rollNumber: "" });
          }}
        >
          <option value="">Select</option>
          <option value="registerNumber">Registration Number</option>
          <option value="rollNumber">Roll Number</option>
        </select>
      </div>

      {searchBy === "registerNumber" && (
        <div className="text-left">
          <label className="block font-semibold mb-1">
            Registration Number
          </label>
          <input
            type="text"
            name="registerNumber"
            value={formData.registerNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      )}

      {searchBy === "rollNumber" && (
        <div className="text-left">
          <label className="block font-semibold mb-1">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      )}

      <div className="text-left">
        <label className="block font-semibold mb-1">Date of Birth</label>
        <input
          type="text"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <p className="text-red-600 text-sm font-semibold">DD/MM/YYYY</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          type="submit"
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => {
            setFormData({ registerNumber: "", rollNumber: "", dob: "" });
            setResult(null);
            setError("");
          }}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-400"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
