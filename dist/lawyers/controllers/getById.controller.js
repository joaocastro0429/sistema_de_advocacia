import { GetByIdService } from "../services/getById.service";
export const GetByIdController = async (req, res) => {
    try {
        const id = String(req.params.id);
        const lawyer = await GetByIdService(id);
        res.status(200).json(lawyer);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};
