import { updateService } from "../services/update.service";
export const updateController = async (req, res) => {
    try {
        const id = String(req.params.id);
        const data = req.body; // vem do JSON enviado no PUT/PATCH
        const updatedProcess = await updateService(id, data);
        return res.json(updatedProcess);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//# sourceMappingURL=update.controller.js.map