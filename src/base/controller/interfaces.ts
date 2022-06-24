import { Request, Response, NextFunction } from "express";

import { BaseService } from "@base/service";

export interface IMiddleware {
  handleMiddleware: (req: Request, res: Response, next: NextFunction) => NextFunction
}

export interface IController {
  controllerName: string;
  service: BaseService;
  get?: <T>(req: Request, res: Response) => any,
  getById?: <T>(req: Request, res: Response) => any,
  post?: <T>(req: Request, res: Response) => any,
  put?: <T>(req: Request, res: Response) => any,
  delete?: <T>(req: Request, res: Response) => any,
}