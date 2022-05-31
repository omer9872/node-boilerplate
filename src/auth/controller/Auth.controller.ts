import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";
import { AuthService, IAuthService } from "@auth/index";
import { ILoginUser, ILogoutUser, IRegisterUser } from "@models/index";

import { controllerTypes, authTypes } from "../../TYPES";
import container from "../../container";

@injectable()
export class AuthController extends BaseController {

  controllerName: string;
  private authService: AuthService;

  constructor(@inject(controllerTypes.AuthControllerName) controllerName: string, @inject(authTypes.AuthService) authService: BaseService) {
    super(controllerName, authService);
    this.authService = container.get<IAuthService>(authTypes.AuthService);
  }

  login = async (req: Request, res: Response) => {
    const user: ILoginUser = req.body;
    const token = await this.authService.login(user);
    if (token) {
      res.status(200).json({ token })
    } else {
      res.sendStatus(404)
    }
  }

  logout = (req: Request, res: Response) => {
    const user: ILogoutUser = req.body;
    this.authService.logout(req, user);
    res.sendStatus(200)
  }

  register = (req: Request, res: Response) => {
    const user: IRegisterUser = req.body;
    this.authService.register(user);
    res.sendStatus(200)
  }

  get getControllerName() {
    return this.controllerName;
  }

}