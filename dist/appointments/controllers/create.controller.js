import { CreateService } from '../services/create.service';
export const createAppointment = async (req, res) => {
    try {
        const appointment = await CreateService(req.body);
        return res.status(201).json({
            success: true,
            data: appointment
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Error creating appointment"
        });
    }
};
