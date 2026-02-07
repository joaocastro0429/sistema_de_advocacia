import express, { Request, Response, NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'
import { router } from './clients/routes/client.routes'
import { ProcessRouter } from './process/routes/routes'
import { lawyerRoutes } from './lawyers/routes/routes'
import { appointmentRoutes } from './appointments/routes/routes'
import { filingRoutes } from './filings/routes/routes'
import { loginRouter } from './login/routes/route'

const server = express()

server.use(express.json())

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

server.use('/api', router)
server.use('/api', ProcessRouter)
server.use('/api', lawyerRoutes)
server.use('/api', appointmentRoutes)
server.use('/api', filingRoutes)
server.use('/api', loginRouter)

// 404 - sempre depois das rotas
server.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Route not found' })
})

// Error handler - sempre por último
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    message: err.message || 'Internal server error',
  })
})

server.listen(3333, () => {
  console.log('Server is running on port 3333')
})