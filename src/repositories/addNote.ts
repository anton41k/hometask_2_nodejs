import listNotes from "./allNotes";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import updateData from "./updateData";

import { IAddNotes, INotes } from "../interface/data";
import filterdDate from "../helpers/filterDates";

const addNote = async ({ name, content, category }: IAddNotes) => {
  const notes = await listNotes();
  const newContact: INotes = {
    id: uuidv4(),
    name,
    content,
    category,
    craeted: moment(Date.now()).format("LL"),
    dates: filterdDate(content),
    archived: false,
  };
  notes.push(newContact);
  await updateData(notes);
  return newContact;
};

export default addNote;
