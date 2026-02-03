import { prisma } from "../../lib/prisma"

export const updateFiling = async (id: string, data: any) => {
  try {
    return await prisma.filing.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        status: data.status,
        fileUrl: data.fileUrl,
        protocolNumber: data.protocolNumber,
        processId: data.processId,
        lawyerId: data.lawyerId,
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
