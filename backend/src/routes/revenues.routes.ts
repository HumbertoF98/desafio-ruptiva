import { Router } from "express";
import { getCustomRepository } from "typeorm";
import RevenuesRepository from "../repositories/RevenuesRepository";
import CreateRevenueService from "../services/CreateRevenueService";

const revenuesRouter = Router();

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

export default revenuesRouter;
