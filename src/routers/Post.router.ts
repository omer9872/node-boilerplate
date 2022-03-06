import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Router } from "express";
import { BaseRouter } from ".";
import { BaseController } from "../controller";
import TYPES from "../TYPES";

@injectable()
export class PostRouter extends BaseRouter {
  
  private path: string = "/post";
  router: Router;
  controller: BaseController;
  
  constructor(@inject(TYPES.PostController) controller: BaseController) {
    super(controller);
    this.router = this.getRoute();
    this.controller = controller;
  }

  extendRoutes(){
    /* ...extend your routes... */
    // this.router.get(...)
  }

  getPath() {
    return this.path;
  }

}