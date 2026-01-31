import { RequestHandler } from 'express'
import { CreateService } from '../services/create.service'

export const createAppointment: RequestHandler = async (req, res) => {
  try {
    const appointment = await CreateService(req.body)
    
    return res.status(201).json({
      success: true,
      data: appointment
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error creating appointment"
    })
  }
}