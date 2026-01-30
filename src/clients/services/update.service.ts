import {prisma} from '../../lib/prisma'


export const updateClient = async (id: string, data: any) => {
  return await prisma.process.update({
    where: { id },
    data,
    include: { client: true }
  })
}