import { Container } from "inversify";

import { baseCollectionTypes, BaseMongoRepository, IMongoCollection, IMongoRepository } from "@base/repository";
import { IController } from "@base/controller";
import { IService } from "@base/service";
import { PostController, UserController } from "@controller/index";
import { PostService, UserService } from "@services/index";
import { IRouter, PostRouter, UserRouter } from "@routers/index";
import { PostCollection, UserCollection } from "@collections/index";

import { routerTypes, controllerTypes, serviceTypes, collectionTypes } from "./TYPES";
import { DBName, MongoURL } from "./ENV";

import { AuthService, IAuthService, IJWTService } from "@auth/index";
import { AuthRouter } from "@routers/Auth.router";
import { AuthController } from "@controller/Auth.controller";
import { JWTService } from "@auth/JWT.service";

const container = new Container();
/* bind dependicies... */
/* AUTH... */
container.bind<IRouter>(routerTypes.AuthRouter).to(AuthRouter);
container.bind<IController>(controllerTypes.AuthController).to(AuthController);
container.bind<IAuthService>(serviceTypes.AuthService).to(AuthService);

//container.bind<ISessionService>(serviceTypes.SessionService).to(SessionService);
container.bind<IJWTService>(serviceTypes.JWTService).to(JWTService);

/* User Feature... */
container.bind<IRouter>(routerTypes.UserRouter).to(UserRouter);
container.bind<IController>(controllerTypes.UserController).to(UserController);
container.bind<IService>(serviceTypes.UserService).to(UserService);
container.bind<IMongoCollection>(collectionTypes.UserCollection).to(UserCollection);
/* Post Feature... */
container.bind<IRouter>(routerTypes.PostRouter).to(PostRouter);
container.bind<IController>(controllerTypes.PostController).to(PostController);
container.bind<IService>(serviceTypes.PostService).to(PostService);
container.bind<IMongoCollection>(collectionTypes.PostCollection).to(PostCollection);
/* Repository... */
container.bind<IMongoRepository>(baseCollectionTypes.MongoRepository).to(BaseMongoRepository);

/* CONSTANTS... */
/* Post Constants... */
container.bind<string>(controllerTypes.PostControllerName).toConstantValue("post-controller");
container.bind<string>(routerTypes.PostRouterName).toConstantValue("post-router");
container.bind<string>(serviceTypes.PostServiceName).toConstantValue("post-service");
container.bind<string>(collectionTypes.PostCollectionName).toConstantValue("posts");
/* User Constants... */
container.bind<string>(controllerTypes.UserControllerName).toConstantValue("user-controller");
container.bind<string>(routerTypes.UserRouterName).toConstantValue("user-router");
container.bind<string>(serviceTypes.UserServiceName).toConstantValue("user-service");
container.bind<string>(collectionTypes.UserCollectionName).toConstantValue("users");
/* Auth Constants... */
container.bind<string>(controllerTypes.AuthControllerName).toConstantValue("auth-controller");
container.bind<string>(routerTypes.AuthRouterName).toConstantValue("auth-router");

container.bind<string>(baseCollectionTypes.MongoURL).toConstantValue(MongoURL);
container.bind<string>(baseCollectionTypes.DBName).toConstantValue(DBName);

export default container;