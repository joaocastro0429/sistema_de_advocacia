import { Router } from 'express';
import { RegisterController } from '../controllers/register';
import { loginController } from '../controllers/login';
import { authMiddleware } from '../middlewares/auth.middleware';

export const loginRouter = Router();

loginRouter.post('/register', RegisterController)
loginRouter.get('/login', loginController)

loginRouter.get('/protected', authMiddleware, (req, res) => {
    return res.json({
      message: 'Rota protegida acessada',
    })
  })

