import Revenue from "../models/Revenue";
import { getCustomRepository } from "typeorm";
import RevenuesRepository from "../repositories/RevenuesRepository";

interface Request {
  name: string;
  description: string;
  url_photo: string;
}

class CreateRevenueService {
  public async execute({
    name,
    description,
    url_photo,
  }: Request): Promise<Revenue> {
    const revenuesRepository = getCustomRepository(RevenuesRepository);
    if (!name || !description || !url_photo) {
      throw Error("Todos os campos são obrigatórios");
    }

    const revenue = revenuesRepository.create({
      name,
      description,
      url_photo,
    });

    await revenuesRepository.save(revenue);

    return revenue;
  }
}

export default CreateRevenueService;
