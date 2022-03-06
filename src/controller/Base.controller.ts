import { injectable } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";
import { IController } from "./interfaces";
import { BaseService } from "../services";
import { ObjectId } from "mongodb";

@injectable()
export class BaseController implements IController {

  controllerName: string;
  service: BaseService;

  constructor(controllerName: string, service: BaseService) {
    this.controllerName = controllerName;
    this.service = service;
  }

  get = (req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    this.service.get(2, 2);
    res.sendStatus(200)
  }

  getById = (req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    this.service.getOne(new ObjectId());
    res.sendStatus(200)
  }

  post = (req: Request, res: Response) => {
    console.info(`${"POST"} ${this.controllerName}`);
    this.service.insert();
    res.sendStatus(200)
  }

  put = (req: Request, res: Response) => {
    console.info(`${"PUT"} ${this.controllerName}`);
    this.service.update();
    res.sendStatus(200)
  }

  delete = (req: Request, res: Response) => {
    console.info(`${"DELETE"} ${this.controllerName}`);
    this.service.delete();
    res.sendStatus(200)
  }

}