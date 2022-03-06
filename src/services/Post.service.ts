import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { BaseService } from ".";
import { BaseMongoRepository } from "../repositories";
import TYPES from "../TYPES";

@injectable()
export class PostService extends BaseService {
  constructor(@inject(TYPES.MongoRepository) repository: BaseMongoRepository) {
    super(repository);
  }
}