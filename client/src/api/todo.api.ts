import axios from "axios";
import { ToDoReq } from "../shared/dtos";

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
const todoApiUrl = process.env.REACT_APP_TODO_API;

export const createNewTodo = async ({
  title,
  detail = "",
  isCompleted = false,
}: ToDoReq) => {
  const response = await axios.post(`${baseApiUrl}/${todoApiUrl}`, {
    title,
    detail,
    isCompleted,
  });
  return response.data;
};
