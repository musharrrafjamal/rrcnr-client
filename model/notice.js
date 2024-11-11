import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Notice = mongoose.models.Notice || mongoose.model("Notice", noticeSchema);
export default Notice;
