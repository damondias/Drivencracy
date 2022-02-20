import express from "express";
import poolRouter from "./poolRouter.js"
const router = express.Router();

router.use(poolRouter);

export default router;

