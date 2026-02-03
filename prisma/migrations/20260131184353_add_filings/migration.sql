-- CreateEnum
CREATE TYPE "FilingType" AS ENUM ('INITIAL_PETITION', 'DEFENSE', 'APPEAL', 'MOTION', 'EVIDENCE', 'OTHER');

-- CreateEnum
CREATE TYPE "FilingStatus" AS ENUM ('DRAFT', 'FILED', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "filings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "FilingType" NOT NULL,
    "status" "FilingStatus" NOT NULL DEFAULT 'DRAFT',
    "fileUrl" TEXT,
    "protocolNumber" TEXT,
    "processId" TEXT NOT NULL,
    "lawyerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "filings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "filings" ADD CONSTRAINT "filings_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filings" ADD CONSTRAINT "filings_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
