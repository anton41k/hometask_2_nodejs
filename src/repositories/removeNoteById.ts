import listNotes from "./allNotes";
import updateData from "./updateData";

const removeNoteById = async (id) => {
  const notes = await listNotes();
  const idx = notes.findIndex((contact) => contact.id == id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = notes.splice(idx, 1);
  await updateData(notes);
  return removeContact;
};
export default removeNoteById;
