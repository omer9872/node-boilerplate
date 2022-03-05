import { injectable } from "inversify";
import { MongoClient, Db, Collection } from "mongodb";
import { IRepository } from "./types";

@injectable()
export class Repository implements IRepository {

  url: string = 'mongodb://localhost:27017';
  client: MongoClient = new MongoClient(this.url);
  dbName: string = 'node-boilerplate';
  db: Db;

  constructor() {
    this.connect();
  }

  private connect = async () => {
    await this.client.connect();
    console.log('Connected successfully to server');
    this.db = this.client.db(this.dbName);
  }

  public getCollection(collectionName: string): Collection {
    return this.db.collection(collectionName);
  }

}