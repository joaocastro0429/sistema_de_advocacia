import { Prisma } from '../../../generated/prisma'
import { prisma } from '../../lib/prisma'

// Campos permitidos para atualizar (conforme schema Lawyer)
export const updateLawyer = async (
  id: string,
  data: Prisma.LawyerUpdateInput
) => {
  if (!id) throw new Error('ID is required')

  return await prisma.lawyer.update({
    where: { id },
    data
  })
}