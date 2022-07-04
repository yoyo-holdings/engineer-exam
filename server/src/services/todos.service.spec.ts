import { ToDoNote } from "../models";
import { sequelize } from "../sequelize";
import { ToDoReq } from "../shared/dtos";
import { createTodo, deleteTodo, updateTodo } from "./todos.service";

jest.mock("sequelize");
jest.mock("../sequelize", () => ({
  sequelize: {
    transaction: jest.fn(),
  },
}));

const title = "Test Title";
const detail = "Test Detail";
const isCompleted = false;

const request: ToDoReq = {
  title,
  detail,
  isCompleted,
};
const response: Partial<ToDoNote> = {
  id: 1,
  title,
  detail,
  isCompleted,
};

describe("createTodo", () => {
  it("should return newly created todo", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(response as any);
    expect(await createTodo(request)).toBe(response);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await createTodo(request);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("updateTodo", () => {
  it("should update todo and return affected row(s)", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(1 as any);
    expect(await updateTodo(1, request)).toBe(1);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await updateTodo(1, request);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("deleteTodo", () => {
  it("should delete todo and return affected row(s)", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(1 as any);
    expect(await deleteTodo(1)).toBe(1);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await deleteTodo(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
