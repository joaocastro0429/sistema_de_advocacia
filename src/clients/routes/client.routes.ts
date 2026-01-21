import {Router} from 'express'
import {create} from   '../../clients/controllers/create.controller'
import {getClient } from '../../clients/controllers/get.controller'
import {getClientByIdController } from '../../clients/controllers/getById.controller'
import { updateClientController } from '../controllers/update.controller'
import { deleteClientController } from '../controllers/delete.controller'

const router= Router()

router.post("/users",create)
router.get("/users",getClient)
router.get("/users/:id",getClientByIdController)
router.put("/users/:id",updateClientController)
router.delete("/users/:id",deleteClientController)


export{router}

