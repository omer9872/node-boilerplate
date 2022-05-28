import { injectable } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { BaseService } from "@base/service";

import { IController } from "./interfaces";

@injectable()
export class BaseController implements IController {

  controllerName: string;
  service: BaseService;

  constructor(controllerName: string, service: BaseService) {
    this.controllerName = controllerName;
    this.service = service;
  }

  get = async (req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    const datas = await this.service.get(2, 2);
    res.status(200).json({ itemCount: datas.length, data: datas })
  }

  getById = async (req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    const id = new ObjectId(req.params.id);
    const data = await this.service.getOne(id);
    res.status(200).json({ data })
  }

  post = async (req: Request, res: Response) => {
    console.info(`${"POST"} ${this.controllerName}`);
    const data: any = req.body;
    this.service.insert(data);
    res.sendStatus(200)
  }

  put = async (req: Request, res: Response) => {
    console.info(`${"PUT"} ${this.controllerName}`);
    const id = new ObjectId(req.params.id);
    const updatedFields = req.body;
    await this.service.update(new ObjectId(id), updatedFields);
    res.sendStatus(200)
  }

  delete = async (req: Request, res: Response) => {
    console.info(`${"DELETE"} ${this.controllerName}`);
    const id = new ObjectId(req.params.id);
    await this.service.delete(id);
    res.sendStatus(204)
  }

}