import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma';
var connectionString = "".concat(process.env.DATABASE_URL);
var adapter = new PrismaPg({ connectionString: connectionString });
var prisma = new PrismaClient({ adapter: adapter });
export { prisma };
