import { prisma } from "../../lib/prisma";

export const deleteAppointment = async (id: string) => {
  await prisma.appointment.delete({
    where: {
      id,
    },
  });
};
