import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Router } from "express";
import { BaseRouter } from ".";
import { BaseController } from "../controller";
import { controllerTypes } from "../TYPES";
import routerTypes from "./types";

@injectable()
export class PostRouter extends BaseRouter {

  static initRoutes = true;
  static isAuth = true;

  private path: string = "/post";
  router: Router;
  controller: BaseController;

  constructor(@inject(controllerTypes.PostController) controller: BaseController, @inject(routerTypes.PostRouterName) routerName: string) {
    super(routerName, controller, PostRouter.isAuth, PostRouter.initRoutes);
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