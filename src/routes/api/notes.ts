import express from "express";

import { ctrlWrapper, validation } from "../../middlewares";
import { noteSchema } from "../../schema";
import {
  getAllNotes,
  getNoteById,
  getStats,
  removeNote,
  setAddNote,
  updateNote,
} from "../../services";

const router = express.Router();

const validatioAddNotenMiddleware = validation(noteSchema.addNoteSchema);
const validatioUpdateNotenMiddleware = validation(noteSchema.updateNoteSchema);

router.get("/", ctrlWrapper(getAllNotes));

router.get("/stats", ctrlWrapper(getStats));

router.get("/:id", ctrlWrapper(getNoteById));

router.post("/", validatioAddNotenMiddleware, ctrlWrapper(setAddNote));

router.delete("/:id", ctrlWrapper(removeNote));

router.patch("/:id", validatioUpdateNotenMiddleware, ctrlWrapper(updateNote));

export default router;
