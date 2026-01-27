import {prisma} from '../../lib/prisma'

export const GetService=async()=>{
    const lawyer=   await prisma.lawyer.findMany()
    return lawyer
}