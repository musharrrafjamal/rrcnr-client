import React from "react";

const ResultTable = ({ result }) => {
  return (
    <div className="mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left  p-2 border border-black font-serif">
              Name
            </th>
            <th className="text-left  p-2 border border-black  font-serif">
              Date Of birth
            </th>
            <th className="text-left  p-2 border border-black  font-serif">
              Registration Number
            </th>
            <th className="text-left  p-2 border border-black font-serif">
              Community
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-serif font-semibold">
            <td className="text-left p-2 border border-black">
              {result.candidateName}
            </td>
            <td className="text-left p-2 border border-black"> {result.dob}</td>
            <td className="text-left p-2 border border-black">
              {" "}
              {result.registerNumber}
            </td>
            <td className=" text-left p-2 border border-black ">
              {result.community}
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div
        className={
          result.status === "Pass"
            ? "text-green-500 mt-4 font-bold text-xl"
            : "text-red-500 mt-10"
        }
      >
        {result.status === "Pass"
          ? "You are short list for documents verification"
          : "You are not short list for documents verification"}
      </div>

      {/* <table className="w-full text-left border-collapse shadow-lg">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2 font-semibold w-1/3">Name:</td>
            <td className="border p-2">{result.candidateName}</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border p-2 font-semibold">Roll Number:</td>
            <td className="border p-2">{result.rollNumber}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Register Number:</td>
            <td className="border p-2">{result.registerNumber}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2 font-semibold">Date of Birth:</td>
            <td className="border p-2">{result.dob}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Community:</td>
            <td className="border p-2">{result.community}</td>
          </tr>
          <tr className="bg-gray-100">
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
      </table> */}
    </div>
  );
};

export default ResultTable;
