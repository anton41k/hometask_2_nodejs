import { Request, Response } from "express";
import { IStat } from "../interface/data";
import { stats } from "../repositories";

const getStats = async (req: Request, res: Response) => {
  const result: IStat[] = await stats();

  res.json({
    status: "succes",
    code: 200,
    data: {
      result,
    },
  });
};

export default getStats;
