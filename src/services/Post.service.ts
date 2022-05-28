import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from "@base/service";
import { BaseMongoCollection } from "@base/repository";

import { collectionTypes,serviceTypes } from "../TYPES";

@injectable()
export class PostService extends BaseService {
  constructor(@inject(collectionTypes.PostCollection) collection: BaseMongoCollection, @inject(serviceTypes.PostServiceName) serviceName: string) {
    super(collection, serviceName);
  }
}