import { prisma } from '../../lib/prisma';
export const deleteFiling = async (id) => {
    const filing = await prisma.filing.delete({
        where: {
            id
        }
    });
    return filing;
};
