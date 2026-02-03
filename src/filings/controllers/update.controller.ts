import { RequestHandler } from 'express'
import {updateFiling} from '../services/update.service'

export const updateFilingController:RequestHandler = async (req, res) => {
  const  id  = String (req.params.id)
  const data = req.body

  try {
    const updatedFiling = await updateFiling(id, data)
    console.log(updateFiling)
    return res.json(updatedFiling)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update filing' })
  }
}
