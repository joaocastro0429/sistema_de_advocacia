import { prisma } from '../../lib/prisma'

interface ProcessCreateService {
  processNumber: string
  court: string
  type: string
  status?: string
  clientId: string
}

export const ProcessCreateService = async (data: ProcessCreateService) => {
  try {
    const process = await prisma.process.create({
      data: {
        processNumber: data.processNumber,
        court: data.court,
        type: data.type,
        status: data.status, // pode ser undefined se tiver default

        client: {
          connect: { id: data.clientId! } // liga o processo ao cliente
        }
      },
    })

    return process
  } catch (error) {
    console.error(error)
    throw new Error('Erro ao criar processo')
  }
}
