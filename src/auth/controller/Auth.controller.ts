import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response } from "express";

import { BaseController } from "@base/controller";
import { BaseService } from "@base/service";
import { AuthService, IAuthService } from "@auth/index";
import { ILoginUser, ILogoutUser, IRegisterUser } from "@user/index";

import container from "../../container";
import { loginUserValidator, registerUserValidator } from "@user/validators";

@injectable()
export class AuthController extends BaseController {

  controllerName: string;
  private authService: AuthService;

  constructor(@inject("AuthControllerName") controllerName: string, @inject("AuthService") authService: BaseService) {
    super(controllerName, authService);
    this.authService = container.get<IAuthService>(AuthService.name);
  }

  login = async (req: Request, res: Response) => {
    const user: ILoginUser = req.body;
    const { error } = loginUserValidator().validate(user);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      const token = await this.authService.login(user);
      if (token) {
        res.status(200).json({ token })
      } else {
        res.sendStatus(404)
      }
    }
  }

  // can be useful when SessionService is activated...
  logout = (req: Request, res: Response) => {
    const user: ILogoutUser = req.body;
    this.authService.logout(req, user);
    res.sendStatus(200)
  }

  register = (req: Request, res: Response) => {
    const user: IRegisterUser = req.body;
    const { error } = registerUserValidator().validate(user);
    if (error) {
      res.status(400).json({ message: "invalid request body" })
    } else {
      this.authService.register(user);
      res.sendStatus(200)
    }
  }

  get getControllerName() {
    return this.controllerName;
  }

}