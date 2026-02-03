import {prisma} from  '../../lib/prisma'

export  const getFilingS = async () => {
    try{
         const filing = await prisma.filing.findMany()
       return filing
    }catch(Error:any){
        throw new Error("Error fetching filings")
    }
 
}