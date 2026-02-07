import { Request, Response } from 'express';
import { CreateClient } from '../services/create.service';
import { Prisma } from '../../../generated/prisma';

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               cpf:
 *                 type: string
 *               cnpj:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created client.
 *       409:
 *         description: Conflict - a client with this CPF or CNPJ already exists.
 *       500:
 *         description: Internal server error
 */
export const createController = async (req: Request, res: Response) => {
    try {
        const client = await CreateClient(req.body);
        return res.status(201).json(client);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                const target = (error.meta?.target as string[]) || [];
                if (target.includes('cpf')) {
                    return res.status(409).json({ message: 'A client with this CPF already exists.' });
                }
                if (target.includes('cnpj')) {
                    return res.status(409).json({ message: 'A client with this CNPJ already exists.' });
                }
            }
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};