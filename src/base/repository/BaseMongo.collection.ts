import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Collection, Db } from "mongodb";

import { IMongoCollection } from "./interfaces";
import { baseCollectionTypes } from "./types";
import { BaseMongoRepository } from "./BaseMongo.repository";

@injectable()
export class BaseMongoCollection implements IMongoCollection {

  mongoRepository: BaseMongoRepository;
  collectionName: string;
  collection: Collection;

  constructor(@inject(baseCollectionTypes.MongoRepository) mongoRepository: BaseMongoRepository, collectionName: string) {
    this.mongoRepository = mongoRepository;
    this.collectionName = collectionName;
    this.initCollection();
  }

  private initCollection = async () => {
    const db: Db = await this.mongoRepository.getDB()
    this.collection = db.collection(this.collectionName);
  }

}