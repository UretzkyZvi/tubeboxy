/*
  Warnings:

  - A unique constraint covering the columns `[channelId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `channelId` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "channelId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Token_channelId_key" ON "Token"("channelId");
