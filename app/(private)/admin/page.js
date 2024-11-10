"use client";
import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function CandidatesTable() {
  const [candidates, setCandidates] = useState([]);
  const [editingCandidate, setEditingCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await fetch("/api/admin/candidates");
        const data = await res.json();
        if (data.success) {
          setCandidates(data.candidates);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);

  const deleteCandidate = async (id) => {
    if (confirm("Are you sure you want to delete this candidate?")) {
      try {
        const res = await fetch(`/api/admin/candidates/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          setCandidates(candidates.filter((candidate) => candidate._id !== id));
        }
      } catch (error) {
        console.error("Error deleting candidate:", error);
      }
    }
  };

  const handleEditClick = (candidate) => {
    setEditingCandidate(candidate);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingCandidate({ ...editingCandidate, [name]: value });
  };

  const saveEdit = async () => {
    try {
      const res = await fetch(`/api/admin/candidates/${editingCandidate._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCandidate),
      });
      const data = await res.json();
      if (data.success) {
        setCandidates(
          candidates.map((candidate) =>
            candidate._id === data.candidate._id ? data.candidate : candidate
          )
        );
        setEditingCandidate(null);
      }
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  return (
    <div className="bg-sky-200 flex justify-center items-center p-4">
      <div className="w-full max-w-9xl bg-white rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full bg-sky-100 border border-sky-300 rounded-lg">
          <thead>
            <tr className="bg-sky-600 text-white text-left font-semibold">
              <th className="p-4 border-b">Roll Number</th>
              <th className="p-4 border-b">Candidate Name</th>
              <th className="p-4 border-b">Father Name</th>
              <th className="p-4 border-b">DOB</th>
              <th className="p-4 border-b">Register No.</th>
              <th className="p-4 border-b">Community</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <tr
                  key={candidate._id}
                  className="text-sky-900 hover:bg-gray-200"
                >
                  <td className="p-4 border-b text-sm">
                    {candidate.rollNumber}
                  </td>
                  <td className="p-4 border-b text-sm">
                    {editingCandidate &&
                    editingCandidate._id === candidate._id ? (
                      <input
                        type="text"
                        name="candidateName"
                        value={editingCandidate.candidateName}
                        onChange={handleEditChange}
                        className="border rounded p-1"
                      />
                    ) : (
                      candidate.candidateName
                    )}
                  </td>
                  <td className="p-4 border-b text-sm">
                    {candidate.fatherName}
                  </td>
                  <td className="p-4 border-b text-sm">{candidate.dob}</td>
                  <td className="p-4 border-b text-sm">
                    {candidate.registerNumber}
                  </td>
                  <td className="p-4 border-b text-sm">
                    {candidate.community}
                  </td>
                  <td className="p-4 border-b text-sm">
                    {editingCandidate &&
                    editingCandidate._id === candidate._id ? (
                      <select
                        name="status"
                        value={editingCandidate.status}
                        onChange={handleEditChange}
                        className="border rounded p-1"
                      >
                        <option value="Pass">Pass</option>
                        <option value="Fail">Fail</option>
                      </select>
                    ) : (
                      candidate.status
                    )}
                  </td>
                  <td className="p-4 border-b text-sm flex space-x-2">
                    {editingCandidate &&
                    editingCandidate._id === candidate._id ? (
                      <button onClick={saveEdit} className="text-emerald-500">
                        <FaCheckCircle size={20} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(candidate)}
                        className="text-gray-700"
                      >
                        <MdModeEdit size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteCandidate(candidate._id)}
                      className="text-red-500"
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">
                  No candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
