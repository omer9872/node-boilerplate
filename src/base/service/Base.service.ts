import { injectable } from "inversify";
import 'reflect-metadata';

import { InsertOneResult, ModifyResult, ObjectId, WithId, Document } from "mongodb";

import { BaseMongoCollection } from "@base/repository/BaseMongo.collection";

import { IService } from "./interfaces";

@injectable()
export class BaseService implements IService {

  baseCollection: BaseMongoCollection;
  constructor(baseCollection: BaseMongoCollection, serviceName: string) {
    this.baseCollection = baseCollection;
  }

  get = async <T>(page: number, count: number) => {
    return await this.baseCollection.collection.find({}).toArray() as WithId<T>[];
  };
  getOne = async <T>(id: ObjectId) => {
    return await this.baseCollection.collection.findOne({ _id: id }) as WithId<T>;
  };
  insert = async <T>(document: any) => {
    try {
      return await this.baseCollection.collection.insertOne(document) as InsertOneResult<T>;
    } catch (error) {
      console.log(error)
    }
  };
  update = async <T>(id: ObjectId, updatedFields: any) => {
    return await this.baseCollection.collection.findOneAndUpdate({ _id: id }, { $set: { updatedFields } }) as unknown as ModifyResult<T>;
  };
  delete = async <T>(id: ObjectId) => {
    return await this.baseCollection.collection.findOneAndDelete({ _id: id }) as unknown as ModifyResult<T>;
  };
}