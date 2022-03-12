import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from ".";
import { BaseMongoCollection } from "../collections/BaseMongo.collection";
import { collectionTypes } from "../TYPES";
import serviceTypes from "./types";

@injectable()
export class UserService extends BaseService {
  constructor(@inject(collectionTypes.UserCollection) collection: BaseMongoCollection, @inject(serviceTypes.UserServiceName) serviceName: string) {
    super(collection, serviceName);
  }
}