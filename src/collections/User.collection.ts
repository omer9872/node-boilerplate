import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseMongoCollection, BaseMongoRepository } from '@base/repository'
import { baseCollectionTypes } from "@base/repository/types";

import collectionTypes from "./types";

@injectable()
export class UserCollection extends BaseMongoCollection {
  constructor(@inject(baseCollectionTypes.MongoRepository) mongoRepository: BaseMongoRepository, @inject(collectionTypes.UserCollectionName) collectionName: string) {
    super(mongoRepository, collectionName);
  }
}