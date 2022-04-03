import { Request, Response, NextFunction, RequestHandler } from "express";
import { SessionService } from ".";
import { ILoginUser, ILogoutUser, IRegisterUser, User } from "../models";
import { UserService } from "../services";
import { JWTService } from "./JWT.service";

export interface IAuthService {
  userService: UserService;
  sessionService: SessionService;
  jwtService: JWTService;
  checkAuth: (req: Request, res: Response, next: NextFunction) => any;
  register: (user: IRegisterUser) => any;
  login: (req: Request, user: ILoginUser) => any;
  logout: (req: Request, tokenData: ILogoutUser) => any;
  changePassword: (user: IRegisterUser) => any;
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