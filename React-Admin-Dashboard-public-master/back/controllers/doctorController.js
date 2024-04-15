import Doctor from "../models/DoctorsSchema.js";

// Contrôleur pour créer un nouveau docteur
export const createDoctor = async (req, res) => {
  try {

    const doctor = await Doctor.create(req.body);
    res.status(201).json({ success: true, message: 'Doctor created successfully', data: doctor });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create doctor', error: error.message });
  }
};

// Controller pour récupérer tous les docteurs
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ success: true, message: "Doctors found", data: doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch doctors", error: error.message });
  }
};

// Controller pour récupérer un seul docteur par son ID
export const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, message: "Doctor found", data: doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch doctor", error: error.message });
  }
};

// Controller pour mettre à jour un docteur par son ID
export const updateDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, message: "Doctor updated", data: updatedDoctor });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update doctor", error: error.message });
  }
};

// Controller pour supprimer un docteur par son ID
export const deleteDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, message: "Doctor deleted", data: deletedDoctor });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete doctor", error: error.message });
  }
};
