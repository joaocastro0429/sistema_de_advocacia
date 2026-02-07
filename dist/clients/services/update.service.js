import { prisma } from "../../lib/prisma";
export const updateClient = async (id, data) => {
    try {
        return await prisma.client.update({
            where: { id },
            data: {
                name: data.name,
                cpf: data.cpf,
                profession: data.profession,
                // 👇 Conversão segura
                dateOfBirth: data.dateOfBirth
                    ? new Date(data.dateOfBirth)
                    : undefined,
            },
        });
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
