import express from "express";
import validatePoolSchemaMiddleware from "../middlewares/validatePoolSchemaMiddleware.js";
import { postPool, getPool} from "../controllers/poolController.js"

const poolRouter = express.Router();

poolRouter.post("/pool", validatePoolSchemaMiddleware, postPool);
poolRouter.get("/pool", getPool);
  
export default poolRouter;
