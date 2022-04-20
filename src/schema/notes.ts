import Joi from "joi";

const addNoteSchema = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string()
    .valid("Task", "Random Thought", "Quote", "Idea")
    .required(),
});

const updateNoteSchema = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string()
    .valid("Task", "Random Thought", "Quote", "Idea")
    .required(),
  archived: Joi.boolean().required(),
});

export default { addNoteSchema, updateNoteSchema };
