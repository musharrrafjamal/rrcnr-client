import LogoutButton from "@/components/auth/LogoutButton";
import Link from "next/link";

export default function layout({ children }) {
  return (
    <>
      <div className="flex justify-between py-4 px-10">
        <Link href={`/admin`} className="text-2xl font-bold">
          Admin panel
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href={`/admin/create-notice`} className="hover:underline">
            Create Notice
          </Link>
          <Link href={`/admin/create-candidate`} className="hover:underline">
            Create Candidate
          </Link>
          <LogoutButton />
        </div>
      </div>
      {children}
    </>
  );
}
