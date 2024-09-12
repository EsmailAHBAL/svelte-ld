
import type { Local, PrismaClient } from "@prisma/client";
import locals from "./data.json"
export const seed_db = async (prisma: PrismaClient) => {
  await prisma.local.deleteMany()
  await prisma.local.createMany({
    data: locals.map<Local>((local) => ({ id: local.id, script: local.script, country: local.country, common_name: local.common_name, native_name: local.native_name, format_native: local.format_native, language_code: local.language_code }))
  })
}
