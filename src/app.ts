import express, { Express, NextFunction, Request, Response } from "express";
import type { ErrorRequestHandler } from "express";
import cors from "cors";
import logger from "morgan";

import notesRouter from "./routes/api";

const app: Express = express();
const { PORT = 3000 } = process.env;
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message: message });
};

app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.use((_, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
