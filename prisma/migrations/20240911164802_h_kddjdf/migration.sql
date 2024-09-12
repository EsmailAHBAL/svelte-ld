-- CreateTable
CREATE TABLE "UserSetting" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_user" UUID NOT NULL,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSetting_id_user_key" ON "UserSetting"("id_user");

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
