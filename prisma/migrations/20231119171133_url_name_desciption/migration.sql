-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "podcastMode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "URL" ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT;
