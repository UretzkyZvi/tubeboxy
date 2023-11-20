-- CreateTable
CREATE TABLE "Token" (
    "identity" TEXT NOT NULL,
    "userAccessToken" TEXT NOT NULL,
    "tokenExpiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("identity")
);
