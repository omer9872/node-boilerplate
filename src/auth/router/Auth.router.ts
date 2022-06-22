import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Router } from "express";

import { BaseRouter } from "@base/router";
import { AuthController } from "@auth/controller/Auth.controller";

@injectable()
export class AuthRouter extends BaseRouter {

  static initRoutes = false;
  static isAuth = false;

  private path: string = "/auth";
  router: Router;
  controller: AuthController;

  constructor(@inject("AuthController") controller: AuthController, @inject("AuthRouterName") routerName: string) {
    super(routerName, controller, AuthRouter.isAuth, AuthRouter.initRoutes);
    this.router = this.getRoute();
    this.controller = controller;
    this.extendRoutes();
  }

  extendRoutes() {
    this.router.post('/login', this.controller.login);
    this.router.post('/logout', this.controller.logout);
    this.router.post('/register', this.controller.register);
  }

  getPath() {
    return this.path;
  }

}