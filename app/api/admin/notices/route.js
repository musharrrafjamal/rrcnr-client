import connectMongoDB from "@/lib/connectMongoDB";
import Notice from "@/model/notice";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectMongoDB();

  const { date, title, description } = await req.json();

  if (!date || !title || !description) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      {
        status: 400,
      }
    );
  }

  try {
    // Create new candidate
    const notice = await Notice.create({
      date,
      title,
      description,
    });

    return NextResponse.json({ success: true, notice }, { status: 200 });
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
    const notice = await Notice.find();
    return NextResponse.json({ success: true, notice }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch notice" },
      {
        status: 500,
      }
    );
  }
}
