import { BaseMongoRepository } from "../repositories";
import { ObjectId } from "mongodb";

export interface IService {
  repository: BaseMongoRepository
  get: (page: number, count: number) => void
  getOne: (id: ObjectId) => void
  insert: () => void
  update: () => void
  delete: () => void
}