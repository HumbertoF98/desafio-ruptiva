import { Router } from "express";
import revenuesRouter from "./revenues.routes";
import usersRouter from "./users.routes";
import sessionsRouter from "./sessions.routes";

const routes = Router();

routes.use("/revenues", revenuesRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);

export default routes;
