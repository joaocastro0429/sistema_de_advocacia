import {createAppointment} from '../controllers/create.controller'
import {GetAppointment} from '../controllers/get.controller'
import {GetByIdAppointment}  from '../controllers/getById.controller'
import { updateAppointmentController } from '../controllers/update.controller'
import { deleteAppointmentController } from '../controllers/delete.controller'
import {Router} from 'express'

export const appointmentRoutes= Router()

appointmentRoutes.post("/appointment",createAppointment)
appointmentRoutes.get("/appointment",GetAppointment)
appointmentRoutes.get("/appointment/:id",GetByIdAppointment)
appointmentRoutes.put("/appointment/:id", updateAppointmentController)
appointmentRoutes.delete("/appointment/:id", deleteAppointmentController)
