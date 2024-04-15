import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  region: { type: String },
  gender: { type: String, enum: ["male", "female", "other"] },
  educationLevel: { type: String },
});

export default mongoose.model("User", PatientSchema);
