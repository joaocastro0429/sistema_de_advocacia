import { prisma } from "../../lib/prisma";
export const deleteService = async (id) => {
    try {
        const process = await prisma.process.delete({
            where: { id }
        });
        return process;
    }
    catch (error) {
        throw new Error("Processo não encontrado ou já foi deletado.");
    }
};
