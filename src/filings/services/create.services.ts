import {prisma} from '../../lib/prisma'



export const CreateService = async (data:any)=>{
    try{

        const result = await prisma.filing.create({
            data:{
                title: data.title,
                description: data.description,
                type: data.type,
                status: data.status,
                fileUrl: data.fileUrl,
                protocolNumber: data.protocolNumber,
                processId: data.processId,
                lawyerId: data.lawyerId
            }
        })
        return result
    }catch (error) {
        throw new Error(`Failed to create filing: ${error.message}`)
    }
}