import { prisma } from '../../lib/prisma';
export const GetById = async (id) => {
    try {
        const appointment = await prisma.appointment.findUnique({
            where: { id }
        });
        if (!appointment) {
            throw new Error("Lawyer not found");
        }
        return appointment;
    }
    catch (error) {
        throw error;
    }
};
