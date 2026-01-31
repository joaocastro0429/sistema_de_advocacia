import {prisma} from '../../lib/prisma'



export const appointment=async()=>{
    return await prisma.appointment.findMany()
}