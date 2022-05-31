import { InsertOneResult, ModifyResult, ObjectId, WithId } from "mongodb";
import { BaseMongoCollection } from "../repository/BaseMongo.collection";

export interface IService {
  baseCollection: BaseMongoCollection
  get: <T>(page: number, count: number) => Promise<Array<WithId<T>>>
  getOne: <T>(id: ObjectId) => Promise<WithId<T>>
  insert: <T>(document: T) => Promise<InsertOneResult<T>>
  update: <T>(id: ObjectId, updatedFields: T) => Promise<ModifyResult<T>>
  delete: <T>(id: ObjectId) => Promise<ModifyResult<T>>
}