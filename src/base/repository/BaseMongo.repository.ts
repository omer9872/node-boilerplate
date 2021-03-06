import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Db, MongoClient } from "mongodb";

import { IMongoRepository } from "./interfaces";

@injectable()
export class BaseMongoRepository implements IMongoRepository {

  connectionString: string;
  dbName: string;
  db: Db;

  constructor(@inject("MongoURL") connectionString: string, @inject("DBName") dbName: string) {
    this.connectionString = connectionString;
    this.dbName = dbName;
  }

  private initDB = async () => {
    const client = new MongoClient(this.connectionString);
    await client.connect();
    this.db = client.db(this.dbName);
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