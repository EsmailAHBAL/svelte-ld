import { PrismaClient } from "@prisma/client"
import { seed_db } from "./locals"
const prismaClient = new PrismaClient()
async function main() {
  console.log('form main method')
  let status = 0
  try {
    await seed_db(prismaClient)
  } catch (error) {
    console.log(error)
    await prismaClient.$disconnect()
    status = 1
  }
  finally {
    await prismaClient.$disconnect()
    process.exit(status)
  }
}
main()
