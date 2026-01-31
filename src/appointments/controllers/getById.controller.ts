import { RequestHandler } from 'express'
import {GetById} from '../services/getById.service'


export const GetByIdAppointment:RequestHandler=async(req,res)=>{
    try{
        const id = String(req.params.id)
        const appointment= await GetById(id)
        return res.status(200).json(appointment)
    }catch(error:any){
        throw new Error("Not found appointment")
    }

}