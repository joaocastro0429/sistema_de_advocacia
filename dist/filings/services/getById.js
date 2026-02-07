import { prisma } from '../../lib/prisma';
export const GetById = async (id) => {
    try {
        const filing = await prisma.filing.findUnique({
            where: { id }
        });
        return filing;
    }
    catch (error) {
        throw new Error(`Error fetching filing by ID: ${error.message}`);
    }
};
