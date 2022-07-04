import { Router } from "express";
import {
  createNewTodo,
  deleteTodoEntry,
  fetchTodos,
  updateTodoEntry,
} from "../controllers/todos.controller";

const todosRouter = Router();

todosRouter.get("/", fetchTodos);
todosRouter.post("/", createNewTodo);
todosRouter.put("/:id", updateTodoEntry);
todosRouter.delete("/:id", deleteTodoEntry);

export { todosRouter };
