import { PrismaClient } from '@prisma/client/shared';

import { parse } from 'csv-parse';
const prisma = new PrismaClient();
import * as fs from 'fs';

async function createUser() {
  const user = prisma.user.findMany({
    where: {
      email: 'mathieualbore@gmail.com',
    },
  });

  const useractive = await user;

  if (useractive.length > 0) return;

  const currentUser = await prisma.user.create({
    data: {
      username: 'malbore',
      password: 'test',
      email: 'mathieualbore@gmail.com',
    },
  });

  await prisma.profile.create({
    data: {
      weight: 95,
      user: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  });
}

async function addFoodToDB() {
  const file = __dirname + '/calories_raw_final.csv';

  fs.createReadStream(file)
    .pipe(parse({ delimiter: ';', from_line: 1, relax_quotes: true }))
    .on('data', async function (row) {
      const ingredientCategory = row[0];
      const name = row[1];
      const calories = parseInt(row[2]) || 0;

      // first check if ingredient exist
      const findIngredientByname = await prisma.ingredient.findMany({
        where: {
          name: name,
        },
      });

      if (findIngredientByname.length > 0) {
        for (const ingredient of findIngredientByname) {
          if (ingredient.calories > 0) return;
        }
      }

      if (Number(calories) > 0) {
        await prisma.ingredient.create({
          data: {
            name,
            calories,
            ingredientCategory,
          },
        });
      }
    })
    .on('error', function (error) {
      console.log(error.message);
    })
    .on('end', function () {
      console.log('finished');
    });
}

async function main() {
  await createUser();
  //await addFoodToDB();
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
