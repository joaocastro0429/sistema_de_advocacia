import { RequestHandler } from 'express'
import { getFilingS } from '../services/get.service'


export const FilingsController: RequestHandler = async (req, res) => {
    try {
        const filings = await getFilingS()
        res.json(filings)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}