import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function run() {
  const user = await prisma.user.upsert({
    where: {
      email: "user@example.com"
    },
    update: {},
    create: {
      email: "user@example.com",
      name: "Bibek Axharya"
    },
  });

  console.log(user)
}

try {
  run();
  
} catch (error) {
  console.log(`error is ${error}`);
  process.exit(1);
} finally {
  async () => {
    await prisma.$disconnect;
  };
}
