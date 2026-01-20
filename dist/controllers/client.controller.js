import { createClient } from '../services/client.service';
export const create = async (req, res) => {
    try {
        const { name, cpf, dateOfBirth, maritalStatus, profession } = req.body;
        if (!name || !cpf || !profession) {
            return res.status(400).json({
                error: 'Campos obrigatórios: name, cpf e profession'
            });
        }
        if (cpf.replace(/\D/g, '').length !== 11) {
            return res.status(400).json({
                error: 'CPF inválido'
            });
        }
        const client = await createClient({
            name,
            cpf,
            dateOfBirth,
            maritalStatus,
            profession
        });
        return res.status(201).json({
            message: 'Cliente criado com sucesso',
            data: client
        });
    }
    catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({
                error: 'CPF já cadastrado'
            });
        }
        console.error('Erro ao criar cliente:', error);
        return res.status(500).json({
            error: 'Erro interno ao criar cliente'
        });
    }
};
