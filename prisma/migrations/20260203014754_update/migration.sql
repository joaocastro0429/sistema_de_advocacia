-- DropForeignKey
ALTER TABLE "filings" DROP CONSTRAINT "filings_processId_fkey";

-- AlterTable
ALTER TABLE "filings" ALTER COLUMN "processId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "filings" ADD CONSTRAINT "filings_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
