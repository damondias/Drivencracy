import express from "express";
import validatePoolSchemaMiddleware from "../middlewares/validatePoolSchemaMiddleware.js";
import { postPool, getPool, getPoolChoices, getPoolResult} from "../controllers/poolController.js"

const poolRouter = express.Router();

poolRouter.post("/pool", validatePoolSchemaMiddleware, postPool);
poolRouter.get("/pool", getPool);
poolRouter.get("/pool/:id/choice", getPoolChoices);
poolRouter.get("/pool/:id/result",getPoolResult);
  
export default poolRouter;
