import { prisma } from "../../lib/prisma";
export const deleteAppointment = async (id) => {
    await prisma.appointment.delete({
        where: {
            id,
        },
    });
};
