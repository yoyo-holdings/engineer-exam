import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.get("/", async (req, res) => {
  res.json({ Hi: "there, welcome to this app!" });
});

app.get("/posts", async (req, res) => {
  const { searchString, skip, take, orderBy, type } = req.query;

  const or: Prisma.PostWhereInput = searchString
    ? {
        OR: [
          { title: { contains: searchString as string } },
          { content: { contains: searchString as string } },
        ],
      }
    : {};

  const posts = await prisma.post.findMany({
    where: {
      ...or,
      type: type ? { equals: (type as string).toUpperCase() } : undefined,
    },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: orderBy as Prisma.SortOrder,
      // updatedAt: "desc",
    },
  });

  console.dir("POSTS ALL");
  console.dir(posts);

  res.json(posts);
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  console.dir("POSTS Detail");
  console.dir(`ID ${id}`);
  console.dir(post);

  res.json(post);
});

app.post("/posts", async (req, res) => {
  console.log("lo ngapain masuk ke sini dah");
  const { title, type, state, content } = req.body;

  const result = await prisma.post.create({
    data: {
      title,
      type,
      content,
      state,
    },
  });

  res.json(result);
});

app.put("/posts/done", async (req, res) => {
  const ids = req.body as number[];

  const result = await prisma.post.updateMany({
    where: {
      id: { in: ids },
    },
    data: {
      state: "DONE",
      updatedAt: new Date(),
    },
  });

  res.json(result);
});

app.put("/posts/incomplete", async (req, res) => {
  const ids = req.body as number[];

  const result = await prisma.post.updateMany({
    where: {
      id: { in: ids },
    },
    data: {
      state: "INCOMPLETE",
      updatedAt: new Date(),
    },
  });

  res.json(result);
});

app.put("/posts/change-type", async (req, res) => {
  const ids = req.body.ids as number[];
  const type = req.body.type as string;

  const result = await prisma.post.updateMany({
    where: {
      id: { in: ids },
    },
    data: {
      type,
      updatedAt: new Date(),
    },
  });

  res.json(result);
});

app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, type, state } = req.body;

  console.dir("POSTS Update");
  console.dir(req.body);

  const result = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
      type,
      state,
      updatedAt: new Date(),
    },
  });

  res.json(result);
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;

  const result = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(result);
});

app.delete("/posts", async (req, res) => {
  console.log({ "req.body": req.body });
  const ids = req.body as number[];

  const result = await prisma.post.deleteMany({
    where: {
      id: { in: ids },
    },
  });

  res.json(result);
});

app.listen(app.get("port"), () => {
  console.log(`🚀 Server ready at: http://localhost:${app.get("port")}`);
});
