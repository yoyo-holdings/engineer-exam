import { ToDoNote } from "../models";
import { sequelize } from "../sequelize";
import { ToDoReq } from "../shared/dtos";

/**
 * Get all todos
 * @returns Todos
 */
export const getTodos = async () => {
  try {
    const todos = await ToDoNote.findAll({
      where: {
        type: "todo",
      },
      order: ["createdAt", "DESC"],
    });
    return todos;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Create a new todo
 * @param req Request body
 * @returns Newly created todo
 */
export const createTodo = async (req: ToDoReq) => {
  const { title, detail } = req;
  try {
    const note = await sequelize.transaction((transaction) =>
      ToDoNote.create(
        {
          title,
          detail: detail ?? "",
          type: "todo",
        },
        { transaction }
      )
    );
    return note;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Update existing todo
 * @param id Todo ID
 * @param req Request body
 * @returns Number of affected todo
 */
export const updateTodo = async (id: number, req: ToDoReq) => {
  const { title, detail, isCompleted } = req;
  try {
    const todo = await sequelize.transaction((transaction) =>
      ToDoNote.update(
        {
          title,
          detail,
          isCompleted,
        },
        {
          where: {
            id,
            type: "todo",
          },
          transaction,
        }
      )
    );
    return todo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Delete a todo
 * @param id Todo ID
 * @returns Number of affected todo
 */
export const deleteTodo = async (id: number) => {
  try {
    const todo = await sequelize.transaction((transaction) =>
      ToDoNote.destroy({
        where: {
          id,
          type: "todo",
        },
        transaction,
      })
    );
    return todo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
