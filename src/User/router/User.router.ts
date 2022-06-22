import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Router } from "express";

import { BaseController } from '@base/controller'
import { BaseRouter } from '@base/router'

@injectable()
export class UserRouter extends BaseRouter {

  static initRoutes = true;
  static isAuth = true;

  private path: string = "/user";
  router: Router;
  controller: BaseController;

  constructor(@inject("UserController") controller: BaseController, @inject("UserRouterName") routerName: string) {
    super(routerName, controller, UserRouter.isAuth, UserRouter.initRoutes);
    this.router = this.getRoute();
    this.controller = controller;
  }

  extendRoutes() {
    /* ...extend your routes... */
    // this.router.get(...)
  }

  getPath() {
    return this.path;
  }

}