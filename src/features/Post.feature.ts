import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Controller } from "../dev/Controller";
import { Feature } from "../dev/Feature"
import { Routes } from "../dev/Routes";
import { Service } from "../dev/Service";
import TYPES from "../types/types";

@injectable()
export class PostFeature extends Feature {
  constructor(@inject(TYPES.PostRoutes) routes: Routes, @inject(TYPES.PostController) controller: Controller, @inject(TYPES.PostService) service: Service) {
    super({
      name: "PostFeaure",
      description: "Post feautre",
      path: "/post",
      routes,
      controller,
      service
    });
  }
}