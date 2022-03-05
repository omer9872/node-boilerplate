import { injectable } from "inversify";
import { Controller } from "./Controller";
import { Routes } from "./Routes";
import { Service } from "./Service";
import { IFeature } from "./types";

@injectable()
export class Feature implements IFeature {

  name: string;
  description: string;
  path: string;
  routes: Routes;
  controller: Controller;
  service: Service;

  constructor(featureInterface: IFeature) {
    this.name = featureInterface.name;
    this.description = featureInterface.description;
    this.path = featureInterface.path;
    this.routes = featureInterface.routes;
    this.controller = featureInterface.controller;
    this.service = featureInterface.service;
  }

}

