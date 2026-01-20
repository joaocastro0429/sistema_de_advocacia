-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3),
    "estadoCivil" TEXT,
    "profissao" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);
