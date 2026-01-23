/*
  Warnings:

  - You are about to drop the column `type` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "type",
ADD COLUMN     "maritalStatus" TEXT;

-- DropEnum
DROP TYPE "ClientType";
