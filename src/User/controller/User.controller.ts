import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";
import { updateUserValidator } from "@user/validators";
import { IUpdateUser, User } from "@user/model";
import { objectIdValidator } from "@base/validators";

@injectable()
export class UserController extends BaseController {

  controllerName: string;

  constructor(@inject("UserControllerName") controllerName: string, @inject("UserService") userService: BaseService) {
    super(controllerName, userService);
  }

  /* @override put method */
  put = async (req: Request, res: Response) => {
    console.info(`${"PUT"} ${this.controllerName}`);
    const updatedFields: IUpdateUser = req.body;
    const { error } = objectIdValidator().validate(req.params);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const { error } = updateUserValidator().validate(req.body);
      if (error) {
        res.status(400).json({ message: "invalid request body" })
      } else {
        await this.service.update<User>(new ObjectId(req.params.id), updatedFields);
        res.sendStatus(200)
      }
    }
  }

  get getControllerName() {
    return this.controllerName;
  }

}