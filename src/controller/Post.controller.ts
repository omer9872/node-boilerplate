import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";

import { controllerTypes, serviceTypes } from "../TYPES";

@injectable()
export class PostController extends BaseController {

  controllerName: string;

  constructor(@inject(controllerTypes.PostControllerName) controllerName: string, @inject(serviceTypes.PostService) postService: BaseService) {
    super(controllerName, postService);
  }

  get getControllerName() {
    return this.controllerName;
  }

}