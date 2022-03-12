import { Collection, Db } from "mongodb";
import { BaseMongoRepository } from ".";

export interface IMongoRepository {
  connectionString: string;
  dbName: string;
  db: Db;
  getDB(): Promise<Db>;
}

export interface IMongoCollection {
  mongoRepository: BaseMongoRepository;
  collectionName: string;
  collection: Collection;
}
