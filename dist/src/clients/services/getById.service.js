import { prisma } from '../../lib/prisma';
export const getClientById = async (id) => {
    return await prisma.client.findUnique({
        where: { id }
    });
};
//# sourceMappingURL=getById.service.js.map