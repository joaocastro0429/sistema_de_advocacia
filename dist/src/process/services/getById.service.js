import { prisma } from '../../lib/prisma';
export const GetById = async (data) => {
    try {
        const process = await prisma.process.findMany({
            where: {
                clientId: data.id
            }
        });
        return process;
    }
    catch (erro) {
        throw new Error("Process not found!!");
    }
};
//# sourceMappingURL=getById.service.js.map