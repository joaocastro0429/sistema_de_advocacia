import { prisma } from "../../lib/prisma"

interface CreateClientData {
  name: string
  cpf?: string
  cnpj?: string
  dateOfBirth?: string | Date
  profession?: string
  // Remove maritalStatus if not in schema
}

export async function CreateClient(data: CreateClientData) {
  const type = data.cpf ? 'PF' : 'PJ'

  const client = await prisma.client.create({
    data: {
      name: data.name,
    
      cpf: data.cpf ?? null,
      cnpj: data.cnpj ?? null,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : null,
      profession: data.profession ?? null
      // Remove maritalStatus from here
    }
  })

  return client
}