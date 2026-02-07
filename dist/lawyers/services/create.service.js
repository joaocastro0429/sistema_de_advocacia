import { prisma } from '../../lib/prisma';
export const createService = async (data) => {
    try {
        const lawyer = await prisma.lawyer.create({
            data: {
                name: data.name,
                email: data.email,
                oabNumber: data.oabNumber,
                specialty: data.specialty,
                phone: data.phone,
            }
        });
        return lawyer;
    }
    catch (error) {
        console.log(error);
    }
};
