import {  RequestHandler} from 'express'
import { getClientById } from '../../clients/services/getById.service'

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
