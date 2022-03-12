import { ObjectId } from "mongodb";
import { BaseMongoCollection } from "../collections/BaseMongo.collection";

export interface IService {
  baseCollection: BaseMongoCollection
  get: (page: number, count: number) => Promise<Array<any>>
  getOne: (id: ObjectId) => Promise<any>
  insert: (document: any) => Promise<any>
  update: (id: ObjectId, updatedFields: any) => Promise<any>
  delete: (id: ObjectId) => Promise<any>
}