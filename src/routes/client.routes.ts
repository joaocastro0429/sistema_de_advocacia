import {Router} from 'express'
import {create} from   '../controllers/client.controller'
const router= Router()

router.post("/users",create)



export{router}

