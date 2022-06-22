import { Request, Response, NextFunction, RequestHandler } from "express";

import { IRegisterUser, ILoginUser, ILogoutUser, User, UserService } from "@user/index";
import { JWTService } from "@auth/service/JWT.service";

export interface IAuthService {
  userService: UserService;
  //sessionService: SessionService;
  jwtService: JWTService;
  checkAuth: (req: Request, res: Response, next: NextFunction) => any;
  register: (user: IRegisterUser) => any;
  login: (user: ILoginUser) => any;
  logout: (req: Request, tokenData: ILogoutUser) => any;
  changePassword: (user: IRegisterUser) => any;
  checkPassword: (password: string, hash: string) => boolean;
  hashPassword: (password: string) => string;
}

export interface ISessionService {
  session: RequestHandler;
  create: (req: Request, user: ILoginUser) => void;
  delete: (req: Request, user: User) => void;
}

export interface IJWTService {
  generateToken: (user: User) => string;
  verifyToken: (token: string) => string
}