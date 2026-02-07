import { updateAppointment } from "../services/update.service";
export const updateAppointmentController = async (req, res) => {
    const id = String(req.params.id);
    const body = req.body;
    try {
        const appointment = await updateAppointment(id, body);
        return res.status(200).json(appointment);
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to update appointment" });
    }
};
