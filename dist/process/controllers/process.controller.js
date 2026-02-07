import { ProcessCreateService } from '../services/create.services';
export const CreateProcessController = async (req, res) => {
    try {
        const { processNumber, court, type } = req.body;
        const process = await ProcessCreateService({
            processNumber,
            court,
            type
        });
        return res.status(201).json(process);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar processo' });
    }
};
