"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCandidate() {
  const [formData, setFormData] = useState({
    candidateName: "",
    fatherName: "",
    rollNumber: "",
    registerNumber: "",
    dob: "",
    community: "",
    status: "Pass",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        router.push("/admin"); // Redirect to the candidate list page
      } else {
        setError(result.message || "Failed to create candidate");
      }
    } catch (err) {
      setError("An error occurred while creating the candidate");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Create Candidate</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Candidate Name
            </label>
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter candidate's name"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter father's name"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Roll Number
            </label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter roll number"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Register Number
            </label>
            <input
              type="text"
              name="registerNumber"
              value={formData.registerNumber}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter register number"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Community
            </label>
            <input
              type="text"
              name="community"
              value={formData.community}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter community"
              required
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sky-700 font-semibold mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            >
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-sky-600 text-white font-semibold py-3 rounded hover:bg-sky-700 transition duration-300"
          >
            Create Candidate
          </button>
        </div>
      </form>
    </div>
  );
}
