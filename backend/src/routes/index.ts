import { Router } from "express";
import revenuesRouter from "./revenues.routes";

const routes = Router();

routes.use("/revenues", revenuesRouter);

export default routes;
