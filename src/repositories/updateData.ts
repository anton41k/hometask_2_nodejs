import fs from "fs/promises";

import { filePath } from "../helpers";
import { INotes } from "../interface/data";

const updateData = async (contacts: INotes[]) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
};

export default updateData;
