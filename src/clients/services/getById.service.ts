import{prisma} from '../../lib/prisma'

export const getClientById = async (id: string) => {
    return await prisma.client.findUnique({
      where: { id }
    })
  }