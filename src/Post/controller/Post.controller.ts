import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";

@injectable()
export class PostController extends BaseController {

  controllerName: string;

  constructor(@inject("PostControllerName") controllerName: string, @inject("PostService") postService: BaseService) {
    super(controllerName, postService);
  }

  get getControllerName() {
    return this.controllerName;
  }

}