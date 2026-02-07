import { prisma } from '../../lib/prisma';
export const CreateService = async (data) => {
    try {
        const appointment = await prisma.appointment.create({
            data: {
                title: data.title,
                description: data.description,
                date: new Date(data.date),
                status: data.status,
            }
        });
        return appointment;
    }
    catch (Erro) {
        throw new Error("Not fundo appointment");
    }
};
