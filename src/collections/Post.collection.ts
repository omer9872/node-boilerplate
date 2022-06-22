import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseMongoCollection, BaseMongoRepository } from '@base/repository'

@injectable()
export class PostCollection extends BaseMongoCollection {
  constructor(@inject("MongoRepository") mongoRepository: BaseMongoRepository, @inject("PostCollectionName") collectionName: string) {
    super(mongoRepository, collectionName);
  }
}