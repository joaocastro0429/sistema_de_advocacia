import { RequestHandler } from 'express'
import {updateLawyer} from '../../lawyers/services/atualizar.service'
export const updateLawyerController:RequestHandler = async (req, res) => {
  const  id  = String (req.params.id)
  const data = req.body

  try {
    const updatedLawyer= await updateLawyer(id, data)
    return res.json(updatedLawyer)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update client' })
  }
}