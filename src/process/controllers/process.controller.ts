


import { RequestHandler } from 'express'
import { ProcessCreateService } from '../services/create.services'


export const CreateProcessController: RequestHandler = async (req, res) => {
  try {
    const { processNumber, court, type,clientId } = req.body

    const process = await ProcessCreateService({
      processNumber,
      court,
      type,
      clientId
    })

    return res.status(201).json(process)

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao criar processo' })
  }
}
