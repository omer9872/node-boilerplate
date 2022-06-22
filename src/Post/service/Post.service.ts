import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from "@base/service";
import { BaseMongoCollection } from "@base/repository";

@injectable()
export class PostService extends BaseService {
  constructor(@inject("PostCollection") collection: BaseMongoCollection, @inject("PostServiceName") serviceName: string) {
    super(collection, serviceName);
  }
}