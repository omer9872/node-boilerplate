import { injectable } from "inversify";
import 'reflect-metadata';

import { IService } from ".";
import { BaseMongoRepository } from "../repositories";
import { ObjectId } from "bson";

@injectable()
export class BaseService implements IService {

  repository: BaseMongoRepository
  constructor(repository: BaseMongoRepository) {
    this.repository = repository;
  }

  get = (page: number, count: number) => {
    console.log("get items...");
  };
  getOne = (id: ObjectId) => {
    console.log("get item...");
  };
  insert = () => {
    console.log("insert item...");
  };
  update = () => {
    console.log("update item...");
  };
  delete = () => {
    console.log("delete item...");
  };
}