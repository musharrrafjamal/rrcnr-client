import TableData from "@/components/tableData/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="text-lg">
        <span className="font-bold text-red-600 font-serif">Help Desk:</span>
        <span className="text-black font-semibold font-serif">
          {" "}
          For any Problem/Information Call on Mobile No.: 9560268111, 9560268342{" "}
          <br />
          from 09:30 AM to 18:00 PM (Except Holidays)
        </span>
      </section>
      <Image
        src={"/railway-building.jpeg"}
        width={1000}
        height={1000}
        className="w-full"
      />
      <TableData />
    </div>
  );
}
