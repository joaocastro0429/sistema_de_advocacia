import { deleteLawyer } from '../services/delete.service';
export const deleteLawyerController = async (req, res) => {
    const id = String(req.params.id);
    try {
        const deletedLawyer = await deleteLawyer(id);
        return res.json(deletedLawyer);
    }
    catch (error) {
        //TODO: add specific error handling for not found
        return res.status(500).json({ error: 'Failed to delete lawyer' });
    }
};
