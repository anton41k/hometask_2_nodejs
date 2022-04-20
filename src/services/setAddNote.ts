import { Request, Response } from "express";

import { INotes } from "../interface/data";
import { addNote } from "../repositories";

const setAddNote = async (req: Request, res: Response) => {
  const result: INotes = await addNote(req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: {
      result,
    },
  });
};

export default setAddNote;
