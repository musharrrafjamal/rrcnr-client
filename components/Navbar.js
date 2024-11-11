import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-800 mt-2 ">
      <div className="flex space-x-4 p-2">
        <Link href="/" className="text-white hover:underline font-serif">
          HOME
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          ABOUT US
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          RULES
        </Link>
        <Link href="/results" className="text-white hover:underline font-serif">
          RESULTS
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          RULES/PROCEDURE & PERFORMA
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          CONTACT US
        </Link>
        <Link href="/admin" className="text-white hover:underline font-serif">
          ADMIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
