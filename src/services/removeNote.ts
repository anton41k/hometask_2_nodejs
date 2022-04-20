import { Request, Response } from "express";
import { NotFound } from "http-errors";

import { INotes } from "../interface/data";
import { removeNoteById } from "../repositories";

const removeNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result: INotes = await removeNoteById(id);
  if (!result) {
    throw new NotFound(`Note with id=${id} not found!`);
  }
  res.json({
    status: "succes",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

export default removeNote;
