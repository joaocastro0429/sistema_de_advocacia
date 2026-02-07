import { Router } from 'express';
import { createUserController } from '../controllers/create.controller';
import { getUsersController } from '../controllers/get.controller';
const userRoutes = Router();
userRoutes.post('/users', createUserController);
userRoutes.get('/users', getUsersController);
export { userRoutes };
