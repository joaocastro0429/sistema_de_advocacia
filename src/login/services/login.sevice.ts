import { prisma } from '../../lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface LoginData {
  email: string
  password: string
}

export const LoginService = async (data: LoginData) => {
  const { email, password } = data

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new Error('Email or password invalid')
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error('Email or password invalid')
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  )

  return {
    user: {
      id: user.id,
      email: user.email,
    },
    token,
  }
}