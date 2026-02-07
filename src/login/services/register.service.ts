import { prisma } from '../../lib/prisma'
import bcrypt from 'bcrypt'

interface RegisterProps {
  email: string
  password: string
}

export const Register = async ({ email, password }: RegisterProps) => {
  const userExists = await prisma.user.findUnique({
    where: { email },
  })

  if (userExists) {
    throw new Error('User already exists')
  }

  const hashPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
    },
    select: {
      id: true,
      email: true,
    },
  })

  return user
}