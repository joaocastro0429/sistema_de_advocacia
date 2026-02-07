import {RequestHandler} from 'express'
import { LoginService } from '../services/login.sevice'

export const loginController:RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body

    const result = await LoginService({ email, password })

    return res.status(200).json(result)
  } catch (error: any) {
    return res.status(401).json({
      message: error.message || 'Invalid credentials',
    })
  }
}