import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongoDB";
import Candidate from "@/model/candidate";

export async function DELETE(req, { params }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { success: false, message: "Candidate ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();
    await Candidate.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "Candidate deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete candidate:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete candidate" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { success: false, message: "Candidate ID is required" },
      { status: 400 }
    );
  }

  const {
    candidateName,
    fatherName,
    rollNumber,
    registerNumber,
    dob,
    community,
    status,
  } = await req.json();

  try {
    await connectMongoDB();
    const candidate = await Candidate.findByIdAndUpdate(
      id,
      {
        candidateName,
        fatherName,
        rollNumber,
        registerNumber,
        dob,
        community,
        status,
      },
      { new: true }
    );

    return NextResponse.json({ success: true, candidate }, { status: 200 });
  } catch (error) {
    console.error("Failed to update candidate:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update candidate" },
      { status: 500 }
    );
  }
}
