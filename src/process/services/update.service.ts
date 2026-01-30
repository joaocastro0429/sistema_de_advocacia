import {prisma} from '../../lib/prisma'


export const updateLawyer = async (id: string, data: any) => {
  return await prisma.process.update({
    where: { id },
    data
  })
}