import { prisma } from '../../lib/prisma';
export const updateService = async (id, data) => {
    const process = await prisma.process.update({
        where: { id },
        data: {
            processNumber: data.processNumber,
            court: data.court,
            type: data.type,
            clientId: data.clientId,
        }
    });
    return process;
};
//# sourceMappingURL=update.service.js.map