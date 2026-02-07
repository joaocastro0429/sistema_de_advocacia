import { prisma } from '../../lib/prisma';
export const deleteLawyer = async (id) => {
    return await prisma.lawyer.delete({
        where: { id },
    });
};
