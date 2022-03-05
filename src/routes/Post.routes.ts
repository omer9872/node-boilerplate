import { injectable, inject } from "inversify";
import "reflect-metadata";
import { PostController } from "../controllers/Post.controller";
import { Routes } from "../dev/Routes";
import TYPES from "../types/types";

@injectable()
export class PostRoutes extends Routes {
  path:string;
  constructor(basePath: string = "/post") {
    super(basePath);
    this.path = basePath;
  }
}