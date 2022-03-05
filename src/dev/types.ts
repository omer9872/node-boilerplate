import { Request, Response, NextFunction, Router } from 'express';
import { Collection, Db, MongoClient } from 'mongodb';
import { Controller } from './Controller';
import { Repository } from './Repository';
import { Routes } from './Routes';
import { Service } from './Service';

export interface IFeature {
  name: string,
  description: string,
  path: string,
  routes: Routes,
  controller: Controller;
  service: Service;
}

export interface IRepository {
  url: string;
  client: MongoClient;
  dbName: string;
  db: Db;
}

export interface IService {
  name: string,
  repository: Repository,
  collection: Collection,
}

export interface IRoutes {
  path: string,
}
export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IController {
  get?: {
    middlewares?: Array<Function>,
    handleRequest: (req: Request, res: Response) => void,
  },
  getById?: {
    middlewares?: Array<Function>,
    handleRequest: (req: Request, res: Response) => void,
  },
  insert?: {
    middlewares?: Array<Function>,
    handleRequest: (req: Request, res: Response) => void,
  },
  update?: {
    middlewares?: Array<Function>,
    handleRequest: (req: Request, res: Response) => void,
  },
  delete?: {
    middlewares?: Array<Function>,
    handleRequest: (req: Request, res: Response) => void,
  },
}