import { AppointmentStatus } from '../../../generated/prisma'
import { prisma } from '../../lib/prisma'

export interface AppointmentData {
  title: string
  description?: string
  date: Date | string
  status?: AppointmentStatus
  clientId?: string
  lawyerId?: string
  processId?: string
}

export const CreateService = async (data: AppointmentData) => {
  try{
    const appointment = await prisma.appointment.create({
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        status: data.status,
      }
  
      })
      return appointment

  }catch(Erro:any){
    throw new Error("Not fundo appointment")
  }
 
  

  
}