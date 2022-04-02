import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { NextFunction, Request, Response } from "express";
import { IAuthService } from ".";
import { ILoginUser, ILogoutUser, IRegisterUser } from "../models";
import { UserService } from "../services";
import serviceTypes from "../services/types";
import { SessionService } from "./Session.service";



@injectable()
export class AuthService implements IAuthService {

  userService: UserService;
  sessionService: SessionService;
  constructor(@inject(serviceTypes.UserService) userService: UserService, @inject(serviceTypes.SessionService) sessionService: SessionService) {
    this.userService = userService;
    this.sessionService = sessionService;
  }

  checkAuth = (req: Request, res: Response, next: NextFunction): any => {
    console.log(req.session);
    if (req.session.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  }

  register = (user: IRegisterUser) => {
    this.userService.insert(user);
    return user.email;
  };

  login = async (req: Request, user: ILoginUser) => {
    const userDatas = await this.userService.getByEmail(user.email);
    console.log(userDatas);
    if (userDatas) {
      this.sessionService.create(req, user)
      return true;
    } else {
      return false;
    }
  };

  logout = (req: Request, tokenData: ILogoutUser) => {
    this.sessionService.delete(req);
    return tokenData.token;
  };

  changePassword = (user: IRegisterUser) => {
    return user.email;
  };

}