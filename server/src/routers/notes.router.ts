import { Router } from "express";
import {
  createNewNote,
  deleteNoteEntry,
  fetchNotes,
  updateNoteEntry,
} from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.get("/", fetchNotes);
notesRouter.post("/", createNewNote);
notesRouter.put("/:id", updateNoteEntry);
notesRouter.delete("/:id", deleteNoteEntry);

export { notesRouter };
