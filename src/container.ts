import { Container } from "inversify";

import { BaseMongoRepository, IMongoCollection, IMongoRepository } from "@base/repository";
import { IController } from "@base/controller";
import { IService } from "@base/service";
import { IRouter } from "@base/router";

import {
  PostController,
  PostRouter,
  PostService
} from '@post/index';

import {
  UserController,
  UserRouter,
  UserService
} from '@user/index';

import { PostCollection, UserCollection } from "@collections/index";

import { DBName, MongoURL } from "./ENV";

import { AuthService, IAuthService, IJWTService } from "@auth/index";
import { AuthRouter } from "@auth/router/Auth.router";
import { AuthController } from "@auth/controller/Auth.controller";
import { JWTService } from "@auth/service/JWT.service";

const container = new Container();
/* bind dependicies... */
/* AUTH... */
container.bind<IRouter>(AuthRouter.name).to(AuthRouter).inSingletonScope();;
container.bind<IController>(AuthController.name).to(AuthController).inSingletonScope();;
container.bind<IAuthService>(AuthService.name).to(AuthService).inSingletonScope();;
container.bind<IJWTService>(JWTService.name).to(JWTService);
//container.bind<ISessionService>(authTypes.SessionService).to(SessionService);

/* User Feature... */
container.bind<IRouter>(UserRouter.name).to(UserRouter).inSingletonScope();
container.bind<IController>(UserController.name).to(UserController).inSingletonScope();
container.bind<IService>(UserService.name).to(UserService).inSingletonScope();
container.bind<IMongoCollection>(UserCollection.name).to(UserCollection);
/* Post Feature... */
container.bind<IRouter>(PostRouter.name).to(PostRouter).inSingletonScope();
container.bind<IController>(PostController.name).to(PostController).inSingletonScope();
container.bind<IService>(PostService.name).to(PostService).inSingletonScope();
container.bind<IMongoCollection>(PostCollection.name).to(PostCollection);
/* Repository... */
container.bind<IMongoRepository>("MongoRepository").to(BaseMongoRepository);

// /* CONSTANTS... */
// /* Post Constants... */
container.bind<string>("PostControllerName").toConstantValue("post-controller");
container.bind<string>("PostRouterName").toConstantValue("post-router");
container.bind<string>("PostServiceName").toConstantValue("post-service");
container.bind<string>("PostCollectionName").toConstantValue("posts");
/* User Constants... */
container.bind<string>("UserControllerName").toConstantValue("user-controller");
container.bind<string>("UserRouterName").toConstantValue("user-router");
container.bind<string>("UserServiceName").toConstantValue("user-service");
container.bind<string>("UserCollectionName").toConstantValue("users");
/* Auth Constants... */
container.bind<string>("AuthControllerName").toConstantValue("auth-controller");
container.bind<string>("AuthRouterName").toConstantValue("auth-router");
container.bind<string>("AuthServiceName").toConstantValue("auth-service");

container.bind<string>("MongoURL").toConstantValue(MongoURL);
container.bind<string>("DBName").toConstantValue(DBName);

export default container;