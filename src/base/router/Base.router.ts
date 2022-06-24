import { injectable, unmanaged } from "inversify";
import "reflect-metadata";

import { Router } from "express";
import chalk from 'chalk';

import { BaseController } from "@base/controller";
import { AuthService, IAuthService } from "@auth/index";

import { IRouter } from "./interfaces";
import container from "../../container";

@injectable()
export class BaseRouter implements IRouter {

  router: Router;
  controller: BaseController;

  constructor(
    routerPath: string,
    @unmanaged() controller: BaseController,
    @unmanaged() isAuth: boolean = true,
    @unmanaged() initializeRoutes: boolean = true
  ) {
    this.router = Router();
    this.controller = controller;
    if (isAuth) {
      this.initAuth();
    }
    if (initializeRoutes && controller) {
      this.initRoutes();
    }
    console.log(chalk.cyan('Router:'), `${routerPath} initialized...`)
  }

  private initAuth() {
    const authService: AuthService = container.get<IAuthService>("AuthService");
    this.router.use(authService.checkAuth);
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