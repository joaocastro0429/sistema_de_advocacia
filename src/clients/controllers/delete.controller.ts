import { RequestHandler } from 'express'
import {deleteClient} from '../../clients/services/delete.sevice'

export const deleteClientController:RequestHandler= async (req, res) => {
  const  id  = String (req.params.id)

  try {
    const deletedClient = await deleteClient(id)
    return res.json(deletedClient)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete client' })
  }
}
