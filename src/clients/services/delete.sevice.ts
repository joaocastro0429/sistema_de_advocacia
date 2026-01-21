import {prisma} from '../../lib/prisma'

export const deleteClient = async (id: string) => {
  const client = await prisma.client.delete({
    where: {
      id
    }
  })

  return client
}
