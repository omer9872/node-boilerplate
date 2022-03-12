import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Db, MongoClient } from "mongodb";
import { IMongoRepository } from "./interfaces";
import { collectionTypes } from "../TYPES";

@injectable()
export class BaseMongoRepository implements IMongoRepository {

  connectionString: string;
  dbName: string;
  db: Db;

  constructor(@inject(collectionTypes.MongoURL) connectionString: string, @inject(collectionTypes.DBName) dbName: string) {
    this.connectionString = connectionString;
    this.dbName = dbName;
  }

  private initDB = async () => {
    const client = new MongoClient(this.connectionString);
    await client.connect();
    this.db = client.db(this.dbName);
    console.log("connected to DB...")
  }

  public getDB = (): Promise<Db> => {
    return new Promise(async (resolve, reject) => {
      if (this.db) {
        return resolve(this.db);
      } else {
        await this.initDB();
        return resolve(this.db);
      }
    })
  }

}