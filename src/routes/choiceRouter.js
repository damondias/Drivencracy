import express from "express";
import validateChoiceSchemaMiddleware from "../middlewares/validateChoiceSchemaMiddleware.js";
import { postChoice, postChoiceVotes } from "../controllers/choiceController.js"

const choiceRouter = express.Router();

choiceRouter.post("/choice", validateChoiceSchemaMiddleware, postChoice);
choiceRouter.post("/choice/:id/vote", postChoiceVotes);

export default choiceRouter;