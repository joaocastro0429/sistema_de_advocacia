import { RequestHandler } from 'express'
import {updateClient} from '../../clients/services/update.service'

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a client by ID
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated client.
 *       500:
 *         description: Internal server error
 */
export const updateClientController:RequestHandler = async (req, res) => {
  const  id  = String (req.params.id)
  const data = req.body

  try {
    const updatedClient = await updateClient(id, data)
    console.log(updateClient)
    return res.json(updatedClient)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update client' })
  }
}