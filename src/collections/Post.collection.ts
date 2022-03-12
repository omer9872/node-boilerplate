import { injectable, inject } from "inversify";
import "reflect-metadata";

import { collectionTypes } from "../TYPES";
import { BaseMongoRepository } from "./BaseMongo.repository";
import { BaseMongoCollection } from "./BaseMongo.collection";

@injectable()
export class PostCollection extends BaseMongoCollection {
  constructor(@inject(collectionTypes.MongoRepository) mongoRepository: BaseMongoRepository, @inject(collectionTypes.PostCollectionName) collectionName: string) {
    super(mongoRepository, collectionName);
  }
}