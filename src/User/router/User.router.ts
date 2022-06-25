import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response, Router } from "express";

import { BaseController } from '@base/controller'
import { BaseRouter } from '@base/router'

@injectable()
export class UserRouter extends BaseRouter {

  static initRoutes = false;
  static isAuth = true;

  private path: string = "/user";
  router: Router;
  controller: BaseController;

  constructor(@inject("UserController") controller: BaseController, @inject("UserRouterName") routerName: string) {
    super(routerName, controller, UserRouter.isAuth, UserRouter.initRoutes);
    this.router = this.getRoute();
    this.controller = controller;
    this.extendRoutes();
  }

  extendRoutes() {
    this.router.get('/', this.controller.get)
    this.router.get('/:id', this.controller.getById)
    this.router.put('/:id', this.controller.put)
  }

  getPath() {
    return this.path;
  }

}