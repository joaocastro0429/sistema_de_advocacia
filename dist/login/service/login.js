import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const Login = async ({ email, password }) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }
    const { password: _, ...userWithoutPassword } = user;
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET not set in environment variables');
    }
    // 🔑 AQUI NASCE O TOKEN
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return {
        user: userWithoutPassword,
        token,
    };
};
