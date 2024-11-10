import connectMongoDB from "@/lib/connectMongoDB";
import Candidate from "@/model/candidate";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectMongoDB();

  const {
    candidateName,
    fatherName,
    rollNumber,
    registerNumber,
    dob,
    community,
    status,
  } = await req.json();

  if (
    !candidateName ||
    !fatherName ||
    !rollNumber ||
    !registerNumber ||
    !dob ||
    !community ||
    !status
  ) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      {
        status: 400,
      }
    );
  }

  try {
    // Create new candidate
    const candidate = await Candidate.create({
      candidateName,
      fatherName,
      rollNumber,
      registerNumber,
      dob,
      community,
      status,
    });

    return NextResponse.json({ success: true, candidate }, { status: 200 });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      // Handle duplicate rollNumber
      return NextResponse.json(
        { success: false, message: "Roll number already exists" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      { success: false, message: "Server Error" },
      {
        status: 500,
      }
    );
  }
}
export async function GET(req, res) {
  try {
    await connectMongoDB();
    const candidates = await Candidate.find();
    return NextResponse.json({ success: true, candidates }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch candidates" },
      {
        status: 500,
      }
    );
  }
}
