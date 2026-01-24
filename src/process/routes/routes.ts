import {Router} from 'express'
import {CreateProcessController} from '../controllers/process.controller'

export const ProcessRouter= Router()

ProcessRouter.post("/process",CreateProcessController)