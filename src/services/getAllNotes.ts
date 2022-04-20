import { Request, Response } from "express";

import { allNotes } from "../repositories";
import { INotes } from "../interface/data";

const getAllNotes = async (req: Request, res: Response) => {
  const result: INotes[] = await allNotes();

  res.json({
    status: "succes",
    code: 200,
    data: {
      result,
    },
  });
};

export default getAllNotes;
