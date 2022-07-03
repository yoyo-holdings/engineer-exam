import { NoteReq } from "./note.req.dto";

export type ToDoReq = {
  isCompleted?: boolean;
} & NoteReq;
