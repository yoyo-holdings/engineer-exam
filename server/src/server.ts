import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { appConfig } from "./configs";

const { port } = appConfig;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
