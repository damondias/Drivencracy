import express from "express";
import validatePoolSchemaMiddleware from "../middlewares/validatePoolSchemaMiddleware.js";
import { postPool, getPool, getPoolChoices} from "../controllers/poolController.js"

const poolRouter = express.Router();

poolRouter.post("/pool", validatePoolSchemaMiddleware, postPool);
poolRouter.get("/pool", getPool);
poolRouter.get("/pool/choice/:id", getPoolChoices);
  
export default poolRouter;
