import { getUsersService } from '../services/get.service';
export const getUsersController = async (req, res) => {
    try {
        const users = await getUsersService();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error getting users' });
    }
};
