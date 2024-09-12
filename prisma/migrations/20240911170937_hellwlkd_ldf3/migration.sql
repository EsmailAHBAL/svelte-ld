/*
  Warnings:

  - You are about to drop the column `local` on the `UserSetting` table. All the data in the column will be lost.
  - Added the required column `localId` to the `UserSetting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSetting" DROP COLUMN "local",
ADD COLUMN     "localId" VARCHAR(20) NOT NULL;

-- CreateTable
CREATE TABLE "Local" (
    "id" VARCHAR(20) NOT NULL,
    "language_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "format_native" TEXT NOT NULL,
    "native_name" TEXT NOT NULL,
    "common_name" TEXT,
    "script" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Local_id_key" ON "Local"("id");

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_localId_fkey" FOREIGN KEY ("localId") REFERENCES "Local"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
