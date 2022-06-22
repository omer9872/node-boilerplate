import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseMongoCollection, BaseMongoRepository } from '@base/repository'

@injectable()
export class UserCollection extends BaseMongoCollection {
  constructor(@inject("MongoRepository") mongoRepository: BaseMongoRepository, @inject("UserCollectionName") collectionName: string) {
    super(mongoRepository, collectionName);
  }
}