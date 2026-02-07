import { RequestHandler, Router } from 'express';
import { createUserController } from '../controllers/create.controller';
import { getUsersController } from '../controllers/get.controller';

const userRoutes = Router();

userRoutes.post('/users', createUserController);
userRoutes.get('/users', getUsersController);

export const notfound:RequestHandler=  (req,res,next)=>{
    next()
    return res.status(404).json({message:"not found"})
}

export { userRoutes };
