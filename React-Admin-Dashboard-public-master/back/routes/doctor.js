import express from 'express';
import { createDoctor, deleteDoctorById, getAllDoctors, getDoctorById, updateDoctorById } from '../controllers/doctorController.js';

const router = express.Router();

// Route pour récupérer tous les docteurs
router.get('/doctors', getAllDoctors);
router.post('/doctors', createDoctor);


// Route pour récupérer un seul docteur par son ID
router.get('/doctors/:id', getDoctorById);

// Route pour mettre à jour un docteur par son ID
router.put('/doctors/:id', updateDoctorById);

// Route pour supprimer un docteur par son ID
router.delete('/doctors/:id', deleteDoctorById);

export default router;
