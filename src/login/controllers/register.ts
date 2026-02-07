import {  RequestHandler} from 'express'
import { Register} from '../services/register.service'

export const RegisterController:RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body

    const result = await Register({ email, password })

    return res.status(200).json(result)
  } catch (error: any) {
    return res.status(401).json({
      message: error.message || 'Invalid credentials',
    })
  }
}
