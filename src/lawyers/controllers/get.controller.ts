import { RequestHandler } from "express"
import {GetService} from '../services/get.service'


export const GetController:RequestHandler=async(req,res)=>{
    try{
        const lawyer = await GetService()
        if (lawyer.length === 0) {
            return res.status(404).json({ message: "No lawyers found" });
        }
        res.status(200).json(lawyer)
        console.log(lawyer)
    }catch(error:any){
        console.error("Error fetching lawyers:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}