import { inject } from "inversify";
import 'reflect-metadata';

import { BaseController } from "../controller";
import { BaseRouter } from "../routers";
import { BaseService } from "../services";
import { routerTypes, controllerTypes, serviceTypes } from "../TYPES";

export interface IFeature {
  title?: string;
  description?: string;
  router: BaseRouter;
  controller: BaseController;
  service: BaseService;
}

export class Feature implements IFeature {

  title?: string;
  description?: string;
  router: BaseRouter;
  controller: BaseController;
  service: BaseService;

  constructor(
    @inject(routerTypes.PostRouter) postRouter: BaseRouter,
    @inject(controllerTypes.PostController) postController: BaseController,
    @inject(serviceTypes.PostService) postService: BaseService
  ) {
    this.router = postRouter;
    this.controller = postController;
    this.service = postService;
  }

}