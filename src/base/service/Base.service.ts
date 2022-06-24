import { injectable } from "inversify";
import 'reflect-metadata';

import { InsertOneResult, ModifyResult, ObjectId, WithId } from "mongodb";
import chalk from 'chalk';

import { BaseMongoCollection } from "@base/repository/BaseMongo.collection";

import { IService } from "./interfaces";

@injectable()
export class BaseService implements IService {

  baseCollection: BaseMongoCollection;
  constructor(baseCollection: BaseMongoCollection, serviceName: string) {
    this.baseCollection = baseCollection;
    console.log(chalk.yellow('Service:'), `${serviceName} initialized...`)
  }

  get = async <T>(page: number, count: number) => {
    const docs = await this.baseCollection.collection.find({}, { limit: page * count }).toArray() as WithId<T>[];
    return docs.slice((page - 1) * count)
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
    return await this.baseCollection.collection.findOneAndUpdate({ _id: id }, { $set: { ...updatedFields } }) as unknown as ModifyResult<T>;
  };
  delete = async <T>(id: ObjectId) => {
    return await this.baseCollection.collection.findOneAndDelete({ _id: id }) as unknown as ModifyResult<T>;
  };
}