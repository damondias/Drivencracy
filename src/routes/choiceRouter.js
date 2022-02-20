import express from "express";
import validateChoiceSchemaMiddleware from "../middlewares/validateChoiceSchemaMiddleware.js";
import { postChoice } from "../controllers/choiceController.js"

const choiceRouter = express.Router();

choiceRouter.post("/choice", validateChoiceSchemaMiddleware, postChoice);

export default choiceRouter;