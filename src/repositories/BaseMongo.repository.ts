import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Collection, Db, MongoClient } from "mongodb";
import { IMongoRepository } from "./interfaces";
import TYPES from "../TYPES";

@injectable()
export class BaseMongoRepository implements IMongoRepository {

  connectionString: string;
  dbName: string;
  db: Db;

  constructor(@inject(TYPES.MongoURL) connectionString: string, @inject(TYPES.DBName) dbName: string) {
    this.connectionString = connectionString;
    this.dbName = dbName;
    this.initDB();
  }

  private initDB = async () => {
    const client = new MongoClient(this.connectionString);
    await client.connect();
    console.info('successfully connected to mongodb...');
    this.db = client.db(this.dbName);
  }

  public getCollection = (collectionName: string): Collection => {
    return this.db.collection(collectionName);
  }

}