import { deleteAppointment } from "../services/delete.service";
export const deleteAppointmentController = async (req, res) => {
    const id = String(req.params.id);
    try {
        await deleteAppointment(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to delete appointment" });
    }
};
