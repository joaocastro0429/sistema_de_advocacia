import { prisma } from '../../lib/prisma'

interface UpdateClientData {
  name?: string
  cpf?: string
  dateOfBirth?: Date | string
  maritalStatus?: string
  profession?: string
}

export const updateClient = async (
  id: string,
  data: UpdateClientData
) => {
  const client = await prisma.client.update({
    where: {
      id
    },
    data: {
      ...(data.name && { name: data.name }),
      ...(data.cpf && { cpf: data.cpf }),
      ...(data.dateOfBirth && {
        dateOfBirth: new Date(data.dateOfBirth)
      }),
      ...(data.maritalStatus && { maritalStatus: data.maritalStatus }),
      ...(data.profession && { profession: data.profession })
    }
  })

  return client
}
