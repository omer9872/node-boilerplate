import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";

@injectable()
export class UserController extends BaseController {

  controllerName: string;

  constructor(@inject("UserControllerName") controllerName: string, @inject("UserService") userService: BaseService) {
    super(controllerName, userService);
  }

  get getControllerName() {
    return this.controllerName;
  }

}