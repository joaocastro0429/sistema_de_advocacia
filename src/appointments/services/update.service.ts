import { prisma } from "../../lib/prisma";
import { Appointment, AppointmentStatus } from "@prisma/client";

interface IUpdateAppointment {
  title?: string;
  description?: string;
  date?: Date;
  status?: AppointmentStatus;
  clientId?: string;
  lawyerId?: string;
  processId?: string;
}

export const updateAppointment = async (id: string, data: IUpdateAppointment): Promise<Appointment> => {
  const appointment = await prisma.appointment.update({
    where: {
      id,
    },
    data,
  });
  return appointment;
};
