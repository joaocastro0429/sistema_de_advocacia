import { RequestHandler } from 'express'
import {GetById} from '../services/getById'


export const GetByIdController: RequestHandler = async (req, res) => {
    const  id  = String (req.params.id) 
    try {
        const filing = await GetById(id)
        if (!filing) {
            return res.status(404).json({ error: 'Filing not found' })
        }
        res.json(filing)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}