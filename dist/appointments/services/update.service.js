import { prisma } from "../../lib/prisma";
export const updateAppointment = async (id, data) => {
    const appointment = await prisma.appointment.update({
        where: {
            id,
        },
        data,
    });
    return appointment;
};
