/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `estadoCivil` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `profissao` on the `clients` table. All the data in the column will be lost.
  - Added the required column `profession` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "dataNascimento",
DROP COLUMN "estadoCivil",
DROP COLUMN "profissao",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "maritalStatus" TEXT,
ADD COLUMN     "profession" TEXT NOT NULL;
