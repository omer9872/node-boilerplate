import { Request, Response } from 'express';
import { injectable } from 'inversify';
import { IController } from "./types";

@injectable()
export class Controller implements IController {

  name: string;

  constructor(name: string = "controller") {
    this.name = name;
  }

  get: {
    handleRequest: (req: Request, res: Response) => void,
  }

  getById: {
    handleRequest: (req: Request, res: Response) => void,
  }

  post: {
    handleRequest: (req: Request, res: Response) => void,
  }

  put: {
    handleRequest: (req: Request, res: Response) => void,
  }

  delete: {
    handleRequest: (req: Request, res: Response) => void,
  }

}

