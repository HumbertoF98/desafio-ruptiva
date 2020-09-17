import { Router } from "express";
import RevenuesController from "../controllers/RevenuesController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const revenuesRouter = Router();

// Applying authenticated middleware in all revenuesRouters
revenuesRouter.use(ensureAuthenticated);

revenuesRouter.get("/", RevenuesController.index);

revenuesRouter.post("/", RevenuesController.create);

revenuesRouter.delete("/:id", RevenuesController.delete);

export default revenuesRouter;
