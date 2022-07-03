import { ToDoNote } from "../models";
import { sequelize } from "../sequelize";
import { NoteReq } from "../shared/dtos";
import { createNote, deleteNote, updateNote } from "./note.service";

jest.mock("sequelize");
jest.mock("../sequelize", () => ({
  sequelize: {
    transaction: jest.fn(),
  },
}));

const title = "Test Title";
const detail = "Test Detail";

const request: NoteReq = {
  title,
  detail,
};
const response: Partial<ToDoNote> = {
  id: 1,
  title,
  detail,
};

describe("createNote", () => {
  it("should return newly created note", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(response as any);
    expect(await createNote(request)).toBe(response);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await createNote(request);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("updateNote", () => {
  it("should update note and return affected row(s)", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(1 as any);
    expect(await updateNote(1, request)).toBe(1);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await updateNote(1, request);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("deleteNote", () => {
  it("should delete note and return affected row(s)", async () => {
    jest.spyOn(sequelize, "transaction").mockResolvedValue(1 as any);
    expect(await deleteNote(1)).toBe(1);
  });

  it("should throw if transaction fails", async () => {
    jest
      .spyOn(sequelize, "transaction")
      .mockImplementation(() => Promise.reject() as any);

    try {
      await deleteNote(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
