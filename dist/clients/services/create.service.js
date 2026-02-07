import { prisma } from "../../lib/prisma";
export async function CreateClient(data) {
    const type = data.cpf ? 'PF' : 'PJ';
    const client = await prisma.client.create({
        data: {
            name: data.name,
            cpf: data.cpf ?? null,
            cnpj: data.cnpj ?? null,
            dateOfBirth: data.dateOfBirth
                ? new Date(data.dateOfBirth)
                : null,
            profession: data.profession ?? null
            // Remove maritalStatus from here
        }
    });
    return client;
}
