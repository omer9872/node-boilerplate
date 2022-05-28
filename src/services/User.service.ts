import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from "@base/service";
import { BaseMongoCollection } from "@base/repository";

import { collectionTypes,serviceTypes } from "../TYPES";

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