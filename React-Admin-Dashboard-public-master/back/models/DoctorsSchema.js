import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  region: { type: String },
  diplomasAndCertifications: { type: String },
  yearsOfExperience: { type: Number },
  photo: { type: String },
});

export default mongoose.model("Doctor", DoctorSchema);
