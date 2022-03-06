import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseService } from "../services";
import { BaseController } from ".";
import TYPES from "../TYPES";

@injectable()
export class PostController extends BaseController {

  controllerName: string;

  constructor(@inject(TYPES.PostControllerName) controllerName: string, @inject(TYPES.PostService) postService: BaseService) {
    super(controllerName, postService);
  }

  get getControllerName() {
    return this.controllerName;
  }

}