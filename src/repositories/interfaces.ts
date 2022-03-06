import { Collection, Db } from "mongodb";

export interface IMongoRepository {
  connectionString: string;
  dbName: string;
  db: Db;
  getCollection: (collectionName: string) => Collection
}
