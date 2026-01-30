import { Router } from 'express';
import { createController } from '../controllers/create.controller'
import { Getcontroller } from '../controllers/get.controller'
import { GetByIdController } from '../controllers/getById.controller'
import { updateLawyerController } from '../controllers/atualizar.controller';
import { deleteLawyerController } from '../controllers/deletar.controller';

const advogadoRoutes = Router();
advogadoRoutes.get('/lawyer', Getcontroller)
advogadoRoutes.get('/lawyer/:id', GetByIdController)

advogadoRoutes.post('/lawyer', createController)

advogadoRoutes.put('/lawyer/:id', updateLawyerController)
advogadoRoutes.delete('/lawyer/:id', deleteLawyerController)

export { advogadoRoutes };
