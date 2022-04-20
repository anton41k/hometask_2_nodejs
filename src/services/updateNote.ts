import { Request, Response } from "express";
import { NotFound } from "http-errors";

import { INotes } from "../interface/data";
import { updateNoteById } from "../repositories";

const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result: INotes = await updateNoteById(id, req.body);

  if (!result) {
    throw new NotFound(`Note with id=${id} not found!`);
  }
  res.json({
    status: "succes",
    code: 200,
    data: {
      result,
    },
  });
};

export default updateNote;
