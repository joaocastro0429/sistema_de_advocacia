import { prisma } from '../../lib/prisma';
export const updateClient = async (id, data) => {
    return await prisma.process.update({
        where: { id },
        data,
        include: { client: true }
    });
};
//# sourceMappingURL=update.service.js.map