import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';
export const createUserService = async ({ name, email, password }) => {
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
    }
    catch (error) {
        console.error(error);
        throw new Error('Error creating user');
    }
};
