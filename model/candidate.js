import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema(
  {
    candidateName: { type: String, required: true },
    fatherName: { type: String, required: true },
    rollNumber: { type: String, unique: true, required: true },
    registerNumber: { type: String, unique: true, required: true },
    dob: { type: String, required: true },
    trade: { type: String, required: true },
    community: { type: String, required: true },
    status: { type: String, enum: ["Pass", "Fail"], required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Candidate ||
  mongoose.model("Candidate", CandidateSchema);
