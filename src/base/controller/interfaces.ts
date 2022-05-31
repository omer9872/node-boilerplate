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
  insert?: <T>(req: Request, res: Response) => any,
  update?: <T>(req: Request, res: Response) => any,
  delete?: <T>(req: Request, res: Response) => any,
}