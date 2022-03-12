import { injectable, inject } from "inversify";
import "reflect-metadata";

import { collectionTypes } from "../TYPES";
import { BaseMongoRepository } from "./BaseMongo.repository";
import { BaseMongoCollection } from "./BaseMongo.collection";

@injectable()
export class UserCollection extends BaseMongoCollection {
  constructor(@inject(collectionTypes.MongoRepository) mongoRepository: BaseMongoRepository, @inject(collectionTypes.UserCollectionName) collectionName: string) {
    super(mongoRepository, collectionName);
  }
}