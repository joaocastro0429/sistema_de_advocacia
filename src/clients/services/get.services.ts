import { prisma } from '../../lib/prisma'

export const getClients = async () => {
  try {
    const clients = await prisma.client.findMany()
    return clients
  } catch (error) {
    throw new Error('Erro ao buscar usuários')
  }
}
