import { RequestHandler } from 'express'
import { getClients } from '../../clients/services/get.services'

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all clients
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of clients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The client ID.
 *                   email:
 *                     type: string
 *                     description: The client email.
 *                   name:
 *                     type: string
 *                     description: The client name.
 *       500:
 *         description: Internal server error
 */
export const getClient:RequestHandler = async (req, res) => {
  try {
    const clients = await getClients()

    return res.status(200).json(clients) // 🔴 OBRIGATÓRIO
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Erro ao buscar usuários'
    })
  }
}
