import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Router } from "express";
import { BaseRouter } from ".";
import { BaseController } from "../controller";
import { routerTypes, controllerTypes } from "../TYPES";

@injectable()
export class UserRouter extends BaseRouter {

  private path: string = "/user";
  router: Router;
  controller: BaseController;

  constructor(@inject(controllerTypes.UserController) controller: BaseController, @inject(routerTypes.UserRouterName) routerName: string) {
    super(controller, routerName);
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