import fs from "fs/promises";
import { filePath } from "../helpers";
import { INotes } from "../interface/data";

const listNotes = async () => {
  const notesFile = await fs.readFile(filePath, "utf8");

  const notesParsed: INotes[] = JSON.parse(notesFile);
  return notesParsed;
};
export default listNotes;
