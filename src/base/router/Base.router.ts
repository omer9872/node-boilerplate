import { injectable, unmanaged } from "inversify";
import "reflect-metadata";

import { Router } from "express";

import { BaseController } from "@base/controller";

import { IRouter } from "./interfaces";
import { AuthService, IAuthService } from "../../auth";
import container from "../../container";
import serviceTypes from "../../services/types";

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
  }

  private initAuth() {
    const authService: AuthService = container.get<IAuthService>(serviceTypes.AuthService);
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