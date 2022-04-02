import { Container } from "inversify";
import { DBName, MongoURL } from "./ENV";

import { BaseMongoRepository, IMongoCollection, IMongoRepository } from "./collections";
import { IController, PostController, UserController } from "./controller";
import { IRouter, PostRouter, UserRouter } from "./routers";
import { IService, PostService, UserService } from "./services";

import { routerTypes, controllerTypes, serviceTypes, collectionTypes } from "./TYPES";
import { PostCollection } from "./collections/Post.collection";
import { UserCollection } from "./collections/User.collection";

import { AuthService, IAuthService, ISessionService, SessionService } from "./auth";
import { AuthRouter } from "./routers/Auth.router";
import { AuthController } from "./controller/Auth.controller";

const container = new Container();
/* bind dependicies... */
/* AUTH... */
container.bind<IRouter>(routerTypes.AuthRouter).to(AuthRouter);
container.bind<IController>(controllerTypes.AuthController).to(AuthController);
container.bind<IAuthService>(serviceTypes.AuthService).to(AuthService);
container.bind<ISessionService>(serviceTypes.SessionService).to(SessionService);

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
container.bind<IMongoRepository>(collectionTypes.MongoRepository).to(BaseMongoRepository);

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

container.bind<string>(collectionTypes.MongoURL).toConstantValue(MongoURL);
container.bind<string>(collectionTypes.DBName).toConstantValue(DBName);

export default container;