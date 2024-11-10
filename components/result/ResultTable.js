import React from "react";

const ResultTable = ({ result }) => {
  return (
    <div className="mt-6">
      <p className="font-bold text-lg text-center mb-4">
        Candidate Information
      </p>
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td className="border p-2 font-semibold">Name:</td>
            <td className="border p-2">{result.candidateName}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Father's Name:</td>
            <td className="border p-2">{result.fatherName}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Roll Number:</td>
            <td className="border p-2">{result.rollNumber}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Register Number:</td>
            <td className="border p-2">{result.registerNumber}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Date of Birth:</td>
            <td className="border p-2">{result.dob}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Community:</td>
            <td className="border p-2">{result.community}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Status:</td>
            <td className="border p-2 font-bold">
              <span
                className={
                  result.status === "Pass" ? "text-green-500" : "text-red-500"
                }
              >
                {result.status}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
