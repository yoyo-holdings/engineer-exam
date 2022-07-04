import { Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseDTO } from "../shared/dtos";
import { notesRouter } from "./notes.router";
import { todosRouter } from "./todos.router";

const router = Router();

router.use("/notes/v1", notesRouter);
router.use("/todos/v1", todosRouter);

router.get("/healthcheck", (_, res: Response) => {
  const response = new ResponseDTO(StatusCodes.OK, "API is healthy");
  res.status(StatusCodes.OK).json(response);
});

export { router };
