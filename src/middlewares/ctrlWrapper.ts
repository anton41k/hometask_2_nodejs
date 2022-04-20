import { Request, Response, NextFunction } from "express";

const ctrlWrapper = (ctrl: any) => {
  return async (
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<any> => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;
