-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('dark', 'ligth');

-- AlterTable
ALTER TABLE "UserSetting" ADD COLUMN     "local" TEXT NOT NULL DEFAULT 'en',
ADD COLUMN     "onboarding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "theme" "Theme" NOT NULL DEFAULT 'ligth';
