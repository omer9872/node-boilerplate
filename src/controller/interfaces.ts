import { Request, Response, NextFunction } from "express";
import { BaseService } from "../services";

export interface IMiddleware {
  handleMiddleware: (req: Request, res: Response, next: NextFunction) => NextFunction
}

export interface IController {
  controllerName: string;
  service: BaseService;
  get?: (req: Request, res: Response) => any,
  getById?: (req: Request, res: Response) => any,
  insert?: (req: Request, res: Response) => any,
  update?: (req: Request, res: Response) => any,
  delete?: (req: Request, res: Response) => any,
}