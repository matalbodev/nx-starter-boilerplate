import { PrismaClient, Role } from '@prisma/client/shared';
const prisma = new PrismaClient();
const { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } = process.env

async function main() {
  // creating admin user
  const user = {
    email: ADMIN_EMAIL || '',
    username: ADMIN_USERNAME || '',
    password: ADMIN_PASSWORD || '',
    role: Role.ADMIN,
  }

  await prisma.user.create({
    data: user
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
