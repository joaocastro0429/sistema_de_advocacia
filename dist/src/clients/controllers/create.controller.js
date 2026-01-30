import { CreateClient } from '../../clients/services/create.service';
export const create = async (req, res) => {
    try {
        const { name, cpf, cnpj, dateOfBirth, profession } = req.body;
        if (!name) {
            return res.status(400).json({
                error: 'Campo obrigatório: name'
            });
        }
        if (!cpf && !cnpj) {
            return res.status(400).json({
                error: 'Informe CPF ou CNPJ'
            });
        }
        if (cpf && cpf.replace(/\D/g, '').length !== 11) {
            return res.status(400).json({
                error: 'CPF inválido'
            });
        }
        if (cnpj && cnpj.replace(/\D/g, '').length !== 14) {
            return res.status(400).json({
                error: 'CNPJ inválido'
            });
        }
        const client = await CreateClient({
            name,
            cpf,
            cnpj,
            dateOfBirth,
            profession
        });
        return res.status(201).json({
            message: 'Cliente criado com sucesso',
            data: client
        });
    }
    catch (error) {
        if (error?.code === 'P2002') {
            return res.status(409).json({
                error: 'CPF ou CNPJ já cadastrado'
            });
        }
        console.error(error);
        return res.status(500).json({
            error: 'Erro interno ao criar cliente'
        });
    }
};
//# sourceMappingURL=create.controller.js.map