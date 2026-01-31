import { prisma } from "../../lib/prisma"


interface ProcessCreateService {
   processNumber: string,
    court: string,
     type: string,
      status?: string,
       clientId?: string,
       lawyerId?: string 
      }


export const ProcessCreateService = async (data: ProcessCreateService) => {
  try {
    const process = await prisma.process.create({
      data: {
        processNumber: data.processNumber,
        court: data.court,
        type: data.type,
        status: data.status,

        // Só adiciona relação se existir ID
        ...(data.clientId && {
          client: { connect: { id: data.clientId } },
        }),

        ...(data.lawyerId && {
          lawyer: { connect: { id: data.lawyerId } },
        }),
      },
    })

    return process
  } catch (error) {
    console.error("ERRO REAL:", error) // 👈 importante pra debugar
    throw new Error('Erro ao criar processo')
  }
}
