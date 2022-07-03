import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../services/notes.service";
import { ResponseDTO } from "../shared/dtos";

export const fetchNotes = async (req: Request, res: Response) => {
  const notes = await getNotes();
  const response = new ResponseDTO(
    StatusCodes.OK,
    "Fetch notes successful.",
    notes
  );
  res.status(StatusCodes.OK).json(response);
};

export const createNewNote = async (req: Request, res: Response) => {
  await createNote(req.body);
  const response = new ResponseDTO(
    StatusCodes.CREATED,
    "Create note successful."
  );
  res.status(StatusCodes.CREATED).json(response);
};

export const updateNoteEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  await updateNote(Number.parseInt(id), req.body);
  const response = new ResponseDTO(
    StatusCodes.ACCEPTED,
    "Update note successful."
  );
  res.status(StatusCodes.ACCEPTED).json(response);
};

export const deleteNoteEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteNote(Number.parseInt(id));
  const response = new ResponseDTO(
    StatusCodes.ACCEPTED,
    "Delete note successful."
  );
  res.status(StatusCodes.ACCEPTED).json(response);
};
