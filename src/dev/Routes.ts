import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Router } from 'express';
import { Controller } from './Controller';
import { IRoutes } from './types';

@injectable()
export class Routes implements IRoutes {

  path: string;

  constructor(path: string) {
    this.path = path;
    //this.initRoutes();
  }


}

