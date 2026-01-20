import express from 'express'
import {router} from './routes/client.routes'

const server= express()
server.use(express.json())

server.use('/api',router)

server.listen(5555)