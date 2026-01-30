import { Router } from 'express';
import { createController } from '../controllers/create.controller';
const advogadoRoutes = Router();
advogadoRoutes.post('/lawyer', createController);
export { advogadoRoutes };
//# sourceMappingURL=advogado.routes.js.map