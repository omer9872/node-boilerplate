import { injectable } from "inversify";
import "reflect-metadata";

import { Router } from "express";
import { BaseController } from "../controller";
import { IRouter } from "./interfaces";

@injectable()
export class BaseRouter implements IRouter {

  router: Router;
  controller: BaseController;

  constructor(controller: BaseController) {
    this.router = Router();
    this.controller = controller;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`/`, this.controller.get);
    this.router.get(`/:id`, this.controller.getById);
    this.router.post(`/`, this.controller.post);
    this.router.put(`/:id`, this.controller.put);
    this.router.delete(`/:id`, this.controller.delete);
  }

  public getRoute() {
    return this.router;
  }

}