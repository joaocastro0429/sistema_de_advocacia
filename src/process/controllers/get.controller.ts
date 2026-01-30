import { RequestHandler } from 'express'
import { Getprocess } from '../services/get.services'

export const GetprocessController: RequestHandler = async (req, res) => {
  try {
    const processes = await Getprocess()

    return res.status(200).json(processes)

  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar processos' })
  }
}
