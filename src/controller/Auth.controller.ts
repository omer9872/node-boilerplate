import { injectable, inject } from "inversify";
import "reflect-metadata";

import { BaseService } from "../services";
import { BaseController } from ".";
import { controllerTypes, serviceTypes } from "../TYPES";
import { AuthService, IAuthService } from "../auth";
import { Request, Response } from "express";
import { ILoginUser, ILogoutUser, IRegisterUser } from "../models";
import container from "../container";

@injectable()
export class AuthController extends BaseController {

  controllerName: string;
  private authService: AuthService;

  constructor(@inject(controllerTypes.AuthControllerName) controllerName: string, @inject(serviceTypes.AuthService) authService: BaseService) {
    super(controllerName, authService);
    this.authService = container.get<IAuthService>(serviceTypes.AuthService);
  }

  login = async (req: Request, res: Response) => {
    const user: ILoginUser = req.body;
    const token = await this.authService.login(req, user);
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