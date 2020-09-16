import Revenue from "../models/Revenue";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Revenue)
class RevenuesRepository extends Repository<Revenue> {}

export default RevenuesRepository;
