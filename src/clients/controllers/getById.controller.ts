import {  RequestHandler} from 'express'
import { getClientById } from '../../clients/services/getById.service'

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a client by ID
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested client.
 *       404:
 *         description: Client not found.
 *       500:
 *         description: Internal server error
 */
export const getClientByIdController:RequestHandler = async (
  req,
  res
) => {
  try {
    const id = String(req.params.id)

    const client = await getClientById(id)

    if (!client) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      })
    }

    return res.status(200).json(client)
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar usuário'
    })
  }
}
