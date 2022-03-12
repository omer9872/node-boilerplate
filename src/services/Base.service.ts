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
    console.log(`Service - ${serviceName} initialized...`)
  }

  get = async (page: number, count: number) => {
    console.log("get items...");
    return await this.baseCollection.collection.find({}).toArray();
  };
  getOne = async (id: ObjectId) => {
    console.log("get item...");
    return await this.baseCollection.collection.findOne({ _id: id });
  };
  insert = async (document: any) => {
    console.log("insert item...", document);
    try {
      return await this.baseCollection.collection.insertOne(document)
    } catch (error) {
      console.log(error)
    }
  };
  update = async (id: ObjectId, updatedFields: any) => {
    console.log("update item...");
    return await this.baseCollection.collection.findOneAndUpdate({ _id: id }, { $set: { updatedFields } })
  };
  delete = async (id: ObjectId) => {
    console.log("delete item...");
    return await this.baseCollection.collection.findOneAndDelete({ _id: id })
  };
}