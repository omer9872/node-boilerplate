import { Router } from "express";
import { BaseController } from "../controller";

export interface IRouter {
  router: Router,
  controller: BaseController;
  getRoute: () => Router,
  getPath?: () => string;
}