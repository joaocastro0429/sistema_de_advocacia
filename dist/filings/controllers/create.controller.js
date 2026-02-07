import { CreateService } from '../services/create.services';
export const CreateController = async (req, res) => {
    try {
        const result = await CreateService(req.body);
        console.log(result);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
