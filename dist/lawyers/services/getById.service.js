import { prisma } from '../../lib/prisma';
export const GetByIdService = async (id) => {
    try {
        const lawyer = await prisma.lawyer.findUnique({
            where: { id }
        });
        if (!lawyer) {
            throw new Error("Lawyer not found");
        }
        return lawyer;
    }
    catch (error) {
        throw error;
    }
};
