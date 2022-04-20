import filterdDate from "../helpers/filterDates";
import { IPatchNotes } from "../interface/data";
import listNotes from "./allNotes";
import updateData from "./updateData";

const updateById = async (id: string, data: IPatchNotes) => {
  const notes = await listNotes();
  const idx = notes.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }

  let note = notes[idx];
  const dates = filterdDate(note.content);
  notes[idx] = { ...note, dates, id, ...data };
  await updateData(notes);
  return notes[idx];
};

export default updateById;
