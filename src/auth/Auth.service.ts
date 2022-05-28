import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { NextFunction, Request, Response } from "express";

import { IAuthService } from ".";
import { ILoginUser, ILogoutUser, IRegisterUser } from "../models";
import { UserService } from "../services";
import serviceTypes from "../services/types";
import { SessionService } from "./Session.service";
import { JWTService } from "./JWT.service";

@injectable()
export class AuthService implements IAuthService {

  userService: UserService;
  //sessionService: SessionService;
  jwtService: JWTService;
  constructor(@inject(serviceTypes.UserService) userService: UserService/*, @inject(serviceTypes.SessionService) sessionService: SessionService*/, @inject(serviceTypes.JWTService) jwtService: JWTService) {
    this.userService = userService;
    //this.sessionService = sessionService;
    this.jwtService = jwtService;
  }

  checkAuth = (req: Request, res: Response, next: NextFunction): any => {
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

  login = async (req: Request, user: ILoginUser): Promise<string | boolean> => {
    const userDatas = await this.userService.getByEmail(user.email);
    const token = this.jwtService.generateToken(user);
    if (userDatas) {
      return token;
    } else {
      return false;
    }
  };

  logout = (req: Request, tokenData: ILogoutUser) => {
    //this.sessionService.delete(req);
    return tokenData.token;
  };

  changePassword = (user: IRegisterUser) => {
    return user.email;
  };

}