import { Request, Response } from "express";
import { NotFound } from "http-errors";
import { noteById } from "../repositories";

const getNoteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await noteById(id);
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

export default getNoteById;
