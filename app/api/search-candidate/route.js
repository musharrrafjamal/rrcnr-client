import connectMongoDB from "@/lib/connectMongoDB";
import Candidate from "@/model/candidate";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchBy, registerNumber, rollNumber, dob } = await req.json();

  if (
    !searchBy ||
    !dob ||
    (searchBy === "registerNumber" && !registerNumber) ||
    (searchBy === "rollNumber" && !rollNumber)
  ) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  await connectMongoDB();

  try {
    const filter = {
      dob,
      ...(searchBy === "registerNumber" ? { registerNumber } : { rollNumber }),
    };

    const candidate = await Candidate.findOne(filter);

    if (!candidate) {
      return NextResponse.json(
        { success: false, message: "Candidate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, candidate }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch candidate data" },
      { status: 500 }
    );
  }
}
