import { prisma } from '../../lib/prisma';
export const Getprocess = async () => {
    try {
        const processes = await prisma.process.findMany({
            include: { client: true }
        });
        return processes;
    }
    catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar processos');
    }
};
//# sourceMappingURL=get.services.js.map