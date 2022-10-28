import bcrypt from 'bcryptjs';
import db from '../libs/db';

async function seed() {
  await db.admin.create({
    data: {
      password: await bcrypt.hash(process.env.PASSWORD!, 10),
    },
  });
}

seed();
