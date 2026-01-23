-- CreateTable
CREATE TABLE "process" (
    "id" TEXT NOT NULL,
    "processNumber" TEXT NOT NULL,
    "court" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "clientId" TEXT NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "process_processNumber_key" ON "process"("processNumber");

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
