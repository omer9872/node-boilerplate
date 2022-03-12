import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseService } from "../services";
import { BaseController } from ".";
import { controllerTypes, serviceTypes } from "../TYPES";

@injectable()
export class UserController extends BaseController {

  controllerName: string;

  constructor(@inject(controllerTypes.UserControllerName) controllerName: string, @inject(serviceTypes.UserService) userService: BaseService) {
    super(controllerName, userService);
  }

  get getControllerName() {
    return this.controllerName;
  }

}