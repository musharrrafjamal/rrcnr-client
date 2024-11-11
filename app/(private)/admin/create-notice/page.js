"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNotice() {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        router.push("/"); // Redirect to the notices list page
      } else {
        setError(result.message || "Failed to create notice");
      }
    } catch (err) {
      setError("An error occurred while creating the notice");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Create Notice</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Date
            </label>
            <input
              type="text"
              name="date"
              placeholder="DD/MM/YYYY"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter notice title"
              required
            />
          </div>
          <div>
            <label className="block text-sky-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-sky-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter notice description"
              rows="4"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-sky-600 text-white font-semibold py-3 rounded hover:bg-sky-700 transition duration-300"
          >
            Create Notice
          </button>
        </div>
      </form>
    </div>
  );
}
