import { RequestHandler } from 'express'
import {updateClient} from '../../clients/services/update.service'

export const updateClientController:RequestHandler = async (req, res) => {
  const  id  = String (req.params.id)
  const data = req.body

  try {
    const updatedClient = await updateClient(id, data)
    return res.json(updatedClient)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update client' })
  }
}