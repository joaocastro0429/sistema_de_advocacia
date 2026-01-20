import { Router } from 'express';
import * as ClientController from '../controllers/client.controller';
const router = Router();
router.post("/users", ClientController.create);
export { router };
