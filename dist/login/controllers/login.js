import { Login } from '../service/login';
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await Login({ email, password });
        return res.status(200).json({ user, token });
    }
    catch (error) {
        return res.status(401).json({ message: error.message });
    }
};
