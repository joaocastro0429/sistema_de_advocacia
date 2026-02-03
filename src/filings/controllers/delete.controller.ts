import { RequestHandler } from 'express'
import {deleteFiling} from '../services/delete.service'

export const deleteFilingController:RequestHandler= async (req, res) => {
  const  id  = String (req.params.id)

  try {
    const deletedFiling = await deleteFiling(id)
    return res.json(deletedFiling)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete filing' })
  }
}
