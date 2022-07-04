import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todos.service";
import { ResponseDTO } from "../shared/dtos";

export const fetchTodos = async (req: Request, res: Response) => {
  const todos = await getTodos();
  const response = new ResponseDTO(
    StatusCodes.OK,
    "Fetch todos successful.",
    todos
  );
  res.status(StatusCodes.OK).json(response);
};

export const createNewTodo = async (req: Request, res: Response) => {
  await createTodo(req.body);
  const response = new ResponseDTO(
    StatusCodes.CREATED,
    "Create todo successful."
  );
  res.status(StatusCodes.CREATED).json(response);
};

export const updateTodoEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  await updateTodo(Number.parseInt(id), req.body);
  const response = new ResponseDTO(
    StatusCodes.ACCEPTED,
    "Update todo successful."
  );
  res.status(StatusCodes.ACCEPTED).json(response);
};

export const deleteTodoEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteTodo(Number.parseInt(id));
  const response = new ResponseDTO(
    StatusCodes.ACCEPTED,
    "Delete todo successful."
  );
  res.status(StatusCodes.ACCEPTED).json(response);
};
