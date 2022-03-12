import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from ".";
import { BaseMongoCollection } from "../collections/BaseMongo.collection";
import { collectionTypes } from "../TYPES";
import serviceTypes from "./types";

@injectable()
export class PostService extends BaseService {
  constructor(@inject(collectionTypes.PostCollection) collection: BaseMongoCollection, @inject(serviceTypes.PostServiceName) serviceName: string) {
    super(collection, serviceName);
  }
}