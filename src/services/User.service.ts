import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from ".";
import { BaseMongoCollection } from "../collections/BaseMongo.collection";
import { collectionTypes } from "../TYPES";
import serviceTypes from "./types";

export interface IUserService {
  getByEmail: (email: string) => Promise<any>
}

@injectable()
export class UserService extends BaseService implements IUserService {
  constructor(@inject(collectionTypes.UserCollection) collection: BaseMongoCollection, @inject(serviceTypes.UserServiceName) serviceName: string) {
    super(collection, serviceName);
  }

  getByEmail = async (email: string) => {
    return await this.baseCollection.collection.findOne({ email: email });
  };

}