import { prisma } from '../../lib/prisma'

interface CreateClientData {
    name: string
    cpf: string
    dateOfBirth?: string | Date
    maritalStatus?: string
    profession: string
}

export const CreateClient = async (data: CreateClientData) => {
  // cast prisma to any because generated client typings may differ in this workspace setup
  const client = await (prisma as any).client.create({
    data: {
      name: data.name,
      cpf: data.cpf,
      dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
      maritalStatus: data.maritalStatus || null,
      profession: data.profession
    }
  })

  return client
}