import { createService } from '../services/create.service';
export const createController = async (req, res) => {
    try {
        const lawyer = await createService(req.body);
        return res.status(201).json(lawyer);
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};
