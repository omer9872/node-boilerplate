import { inject, injectable } from "inversify";
import 'reflect-metadata';

import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import chalk from 'chalk';

import { UserService, ILoginUser, ILogoutUser, IRegisterUser, User } from "@user/index";
import { IAuthService } from "@auth/interfaces";
import { JWTService } from "@auth/service/JWT.service";

@injectable()
export class AuthService implements IAuthService {

  userService: UserService;
  //sessionService: SessionService;
  jwtService: JWTService;
  /* you can change jwt service with session service or can use them both! */
  constructor(@inject("UserService") userService: UserService, @inject("JWTService") jwtService: JWTService, @inject("AuthServiceName") serviceName: string) {
    this.userService = userService;
    //this.sessionService = sessionService;
    this.jwtService = jwtService;
    console.log(chalk.yellow('Service:'), `${serviceName} initialized...`)
  }

  checkAuth = (req: Request, res: Response, next: NextFunction): any => {
    if (req.session?.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  }

  register = (user: IRegisterUser) => {
    user.password = this.hashPassword(user.password);
    this.userService.insert(user);
    return user.email;
  };

  login = async (user: ILoginUser): Promise<string | boolean> => {
    const userDatas = await this.userService.getByEmail(user.email) as User;
    if (this.checkPassword(user.password, userDatas.password)) {
      const token = this.jwtService.generateToken(user);
      if (userDatas) {
        return token;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  logout = (req: Request, tokenData: ILogoutUser) => {
    return tokenData.token;
  };

  changePassword = (user: IRegisterUser) => {
    return user.email;
  };

  checkPassword = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
  }
  hashPassword = (password: string): string => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
  }

}