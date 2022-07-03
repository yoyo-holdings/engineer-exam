import { ToDoNote } from "../models";
import { sequelize } from "../sequelize";
import { NoteReq } from "../shared/dtos";

/**
 * Get all notes
 * @returns Notes
 */
export const getNotes = async () => {
  try {
    const notes = await ToDoNote.findAll({
      where: {
        type: "note",
      },
      order: ["createdAt", "DESC"],
    });
    return notes;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Create a new note
 * @param req Request body
 * @returns Newly created note
 */
export const createNote = async (req: NoteReq) => {
  const { title, detail } = req;
  try {
    const note = await sequelize.transaction((transaction) =>
      ToDoNote.create(
        {
          title,
          detail: detail ?? "",
          type: "note",
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
 * Update existing note
 * @param id Note ID
 * @param req Request body
 * @returns Number of affected note
 */
export const updateNote = async (id: number, req: NoteReq) => {
  const { title, detail } = req;
  try {
    const note = await sequelize.transaction((transaction) =>
      ToDoNote.update(
        {
          title,
          detail,
        },
        {
          where: {
            id,
            type: "note",
          },
          transaction,
        }
      )
    );
    return note;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Delete a note
 * @param id Note ID
 * @returns Number of affected note
 */
export const deleteNote = async (id: number) => {
  try {
    const note = await sequelize.transaction((transaction) =>
      ToDoNote.destroy({
        where: {
          id,
          type: "note",
        },
        transaction,
      })
    );
    return note;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
