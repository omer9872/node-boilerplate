import { injectable, inject } from "inversify";
import { Collection } from "mongodb";
import TYPES from "../types/types";
import { Repository } from "./Repository";
import { IService } from "./types";

@injectable()
export class Service implements IService {

  name: string;
  repository: Repository;
  collection: Collection;

  constructor(repository: Repository, name: string, collectionName: string) {
    this.repository = repository;
    this.collection = this.repository.getCollection(collectionName);
    this.name = name;
  }

  public getAll = async () => {
    return await this.collection.find({}).toArray();
  }

}

