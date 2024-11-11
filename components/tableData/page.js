"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function TableData() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("/api/admin/notices");
        const data = await res.json();
        if (data.success) {
          setNotices(data.notice);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchNotices();
  }, []);
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-800">
            <th className="text-left text-white p-2 border border-black font-serif">
              Date
            </th>
            <th className="text-left text-white p-2 border border-black w-2/3 font-serif">
              Description
            </th>
            <th className="text-left text-white p-2 border border-black font-serif">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr className="font-serif font-semibold">
              <td className="text-left p-2 border border-black">
                {notice.date}
              </td>
              <td className="p-2 border border-black">
                <div className=" flex flex-row">
                  <Image src={"/new1.gif"} width={45} height={25} />
                  <h2 className="text-red-600">{notice.title}</h2>
                </div>
                {notice.description}
              </td>

              <td className="p-2 border border-black text-blue-600">
                <Link className="hover:underline" href={`/results`}>
                  Click here
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
