import { injectable } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import chalk from 'chalk';

import { BaseService } from "@base/service";
import { galleryValidator, objectIdValidator } from "@base/validators";

import { IController } from "./interfaces";

@injectable()
export class BaseController implements IController {

  controllerName: string;
  service: BaseService;

  constructor(controllerName: string, service: BaseService) {
    this.controllerName = controllerName;
    this.service = service;
    console.log(chalk.magenta('Controller:'), `${controllerName} initialized...`)
  }

  get = async <T>(req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    const { error, value } = galleryValidator().validate(req.query);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const datas = await this.service.get<T>(value.page as number, value.count as number);
      res.status(200).json({ ...value, itemCount: datas.length, data: datas })
    }
  }

  getById = async <T>(req: Request, res: Response) => {
    console.info(`${"GET"} ${this.controllerName}`);
    const { error } = objectIdValidator().validate(req.params);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const id = new ObjectId(req.params.id);
      const data = await this.service.getOne<T>(id);
      res.status(200).json({ data })
    }
  }

  post = async <T>(req: Request, res: Response) => {
    console.info(`${"POST"} ${this.controllerName}`);
    const data: any = req.body;
    this.service.insert<T>(data);
    res.sendStatus(200)
  }

  put = async <T>(req: Request, res: Response) => {
    console.info(`${"PUT"} ${this.controllerName}`);
    const { error } = objectIdValidator().validate(req.params);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const id = new ObjectId(req.params.id);
      const updatedFields = req.body;
      await this.service.update<T>(new ObjectId(id), updatedFields);
      res.sendStatus(200)
    }
  }

  delete = async <T>(req: Request, res: Response) => {
    console.info(`${"DELETE"} ${this.controllerName}`);
    const { error } = objectIdValidator().validate(req.params);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const id = new ObjectId(req.params.id);
      await this.service.delete<T>(id);
      res.sendStatus(204)
    }
  }

}