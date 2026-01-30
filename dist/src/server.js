import express from 'express';
import { router } from './clients/routes/client.routes';
import { ProcessRouter } from './process/routes/routes';
import { advogadoRoutes } from './advogados/routes/advogado.routes';
const server = express();
server.use(express.json());
server.use('/api', router);
server.use('/api', ProcessRouter);
server.use('/api', advogadoRoutes);
server.listen(5555);
//# sourceMappingURL=server.js.map