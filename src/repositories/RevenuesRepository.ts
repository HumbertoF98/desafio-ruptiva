import { EntityRepository, Repository } from "typeorm";
import Revenue from "../models/Revenue";

@EntityRepository(Revenue)
class RevenuesRepository extends Repository<Revenue> {}

export default RevenuesRepository;
