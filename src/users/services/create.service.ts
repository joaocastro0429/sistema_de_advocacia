import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';

interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}

export const createUserService = async ({ name, email, password}: CreateUserProps) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return user;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
    }
};
