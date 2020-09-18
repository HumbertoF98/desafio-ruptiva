import { getCustomRepository } from "typeorm";
import { Request, Response } from "express";
import RevenuesRepository from "../repositories/RevenuesRepository";
import CreateRevenueService from "../services/CreateRevenueService";

class RevenuesController {
  public async index(request: Request, response: Response) {
    const revenuesRepository = getCustomRepository(RevenuesRepository);
    const revenues = await revenuesRepository.find();
    return response.json(revenues);
  }

  public async create(request: Request, response: Response) {
    try {
      const { name, description, url_photo } = request.body;
      const createRevenue = new CreateRevenueService();

      const revenue = await createRevenue.execute({
        name,
        description,
        url_photo,
      });

      return response.status(200).json(revenue);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const revenuesRepository = getCustomRepository(RevenuesRepository);
      await revenuesRepository.delete(request.params.id);
      return response
        .status(200)
        .json({ message: "Receita deletada com sucesso" });
    } catch (err) {
      return response
        .status(500)
        .json({ message: "Desculpe, não foi possível deletar" });
    }
  }
}

export default new RevenuesController();
