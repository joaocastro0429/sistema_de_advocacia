import express from 'express'

const server= express()


server.get("/",(req,res)=>{
    res.json({mensage:"hello word"})
})

server.listen(5555)