import { injectable } from "inversify";
import 'reflect-metadata';

import { IService } from ".";
import { ObjectId } from "mongodb";
import { BaseMongoCollection } from "../collections/BaseMongo.collection";

@injectable()
export class BaseService implements IService {

  baseCollection: BaseMongoCollection;
  constructor(baseCollection: BaseMongoCollection, serviceName: string) {
    this.baseCollection = baseCollection;
  }

  get = async (page: number, count: number) => {
    return await this.baseCollection.collection.find({}).toArray();
  };
  getOne = async (id: ObjectId) => {
    return await this.baseCollection.collection.findOne({ _id: id });
  };
  insert = async (document: any) => {
    try {
      return await this.baseCollection.collection.insertOne(document)
    } catch (error) {
      console.log(error)
    }
  };
  update = async (id: ObjectId, updatedFields: any) => {
    return await this.baseCollection.collection.findOneAndUpdate({ _id: id }, { $set: { updatedFields } })
  };
  delete = async (id: ObjectId) => {
    return await this.baseCollection.collection.findOneAndDelete({ _id: id })
  };
}