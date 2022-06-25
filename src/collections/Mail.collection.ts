import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseMongoCollection, BaseMongoRepository } from '@base/repository'

@injectable()
export class MailCollection extends BaseMongoCollection {
  constructor(@inject("MongoRepository") mongoRepository: BaseMongoRepository, @inject("MailCollectionName") collectionName: string) {
    super(mongoRepository, collectionName);
  }
}