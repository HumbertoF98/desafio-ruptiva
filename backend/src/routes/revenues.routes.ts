import { Router } from "express";
import { getCustomRepository } from "typeorm";
import RevenuesRepository from "../repositories/RevenuesRepository";
import CreateRevenueService from "../services/CreateRevenueService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const revenuesRouter = Router();

// Applying authenticated middleware in all revenuesRouters
revenuesRouter.use(ensureAuthenticated);

revenuesRouter.get("/", async (request, response) => {
  const revenuesRepository = getCustomRepository(RevenuesRepository);
  const revenues = await revenuesRepository.find();
  return response.json(revenues);
});

revenuesRouter.post("/", async (request, response) => {
  try {
    const { name, description, url_photo } = request.body;
    const createRevenue = new CreateRevenueService();

    const revenue = await createRevenue.execute({
      name,
      description,
      url_photo,
    });

    return response.json(revenue);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

revenuesRouter.delete("/:id", async (request, response) => {
  try {
    const revenuesRepository = getCustomRepository(RevenuesRepository);
    await revenuesRepository.delete(request.params.id);
    return response.json({ message: "Receita deletada com sucesso" });
  } catch (err) {
    return response
      .status(500)
      .json({ message: "Desculpe, não foi possível deletar" });
  }
});

export default revenuesRouter;
