import { RequestHandler } from 'express'
import {deleteClient} from '../../clients/services/delete.service'

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a client by ID
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
 *         description: The deleted client.
 *       500:
 *         description: Internal server error
 */
export const deleteClientController:RequestHandler= async (req, res) => {
  const  id  = String (req.params.id)

  try {
    const deletedClient = await deleteClient(id)
    return res.json(deletedClient)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete client' })
  }
}
