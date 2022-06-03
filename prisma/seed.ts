import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.PostCreateInput[] = [
  {
    title: "Buy milk",
    type: "TODO",
  },
  {
    title: "Some Working Notes",
    content: "lorem ipsum",
    type: "NOTE",
  },
  {
    title: "Work on my recursive algorithm",
    type: "TODO",
  },
  {
    title: "Work on my math take home quizz",
    type: "TODO",
  },
  {
    title: "Call Dad about the new job",
    type: "TODO",
  },
  {
    title: "What to do in case of chaos",
    content: "Try not to panic and call 911.",
    type: "NOTE",
  },
];

async function main() {
  await prisma.post.deleteMany({});
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.post.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
