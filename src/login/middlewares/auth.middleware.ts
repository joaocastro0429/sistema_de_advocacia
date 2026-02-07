import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Extend the Request interface to include a 'user' property
interface AuthenticatedRequest extends Request {
  user?: { id: string }; // Adjust this type based on your JWT payload
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication token required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }; // Adjust type as per your JWT payload
    req.user = decoded; // Attach the decoded payload to the request object
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Authentication token expired' });
    }
    return res.status(401).json({ message: 'Invalid authentication token' });
  }
};
