import { createUserService } from '../services/create.service';
export const createUserController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await createUserService({ name, email, password });
        // Don't return the password hash
        const { password: _, ...userWithoutPassword } = user;
        return res.status(201).json(userWithoutPassword);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error creating user' });
    }
};
