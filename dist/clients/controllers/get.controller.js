import { getClients } from '../../clients/services/get.services';
export const getClient = async (req, res) => {
    try {
        const clients = await getClients();
        return res.status(200).json(clients); // 🔴 OBRIGATÓRIO
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Erro ao buscar usuários'
        });
    }
};
