import listNotes from "./allNotes";

const noteById = async (id: string) => {
  const notes = await listNotes();
  const idx = notes.findIndex((contact) => contact.id == id);
  if (idx === -1) {
    return null;
  }
  return notes[idx];
};
export default noteById;
