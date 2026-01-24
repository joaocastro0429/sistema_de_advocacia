import express from 'express'
import {router} from './clients/routes/client.routes'
import {ProcessRouter} from './process/routes/routes'

const server= express()
server.use(express.json())

server.use('/api',router)
server.use('/api',ProcessRouter)



server.listen(5555)