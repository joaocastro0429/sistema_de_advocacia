import { GetById } from '../services/getById.service';
export const GetByIdAppointment = async (req, res) => {
    try {
        const id = String(req.params.id);
        const appointment = await GetById(id);
        return res.status(200).json(appointment);
    }
    catch (error) {
        throw new Error("Not found appointment");
    }
};
