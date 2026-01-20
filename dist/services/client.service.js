import { prisma } from '../lib/prisma';
export const createClient = async (data) => {
    const client = await prisma.client.create({
        data: {
            name: data.name,
            cpf: data.cpf,
            dataNascimento: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
            estadoCivil: data.maritalStatus || null,
            profissao: data.profession
        }
    });
    return client;
};
