import express from 'express';
import { router } from './clients/routes/client.routes';
import { ProcessRouter } from './process/routes/routes';
import { lawyerRoutes } from './lawyers/routes/routes';
import { appointmentRoutes } from './appointments/routes/routes';
import { filingRoutes } from './filings/routes/routes';
import { loginRouter } from './login/routes/route';
const server = express();
server.use(express.json());
server.use('/api', router);
server.use('/api', ProcessRouter);
server.use('/api', lawyerRoutes);
server.use('/api', appointmentRoutes);
server.use('/api', filingRoutes);
server.use('/api', loginRouter);
server.listen(3333, () => {
    console.log('Server is running on port 3333');
});
