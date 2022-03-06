import { Container } from "inversify";
import { DBName, MongoURL } from "./ENV";

import { BaseMongoRepository, IMongoRepository } from "./repositories";
import { IController, PostController } from "./controller";
import { IRouter, PostRouter } from "./routers";
import { IService, PostService } from "./services";

import TYPES from "./TYPES";

const container = new Container();
/* bind dependicies... */
container.bind<IRouter>(TYPES.PostRouter).to(PostRouter);
container.bind<IController>(TYPES.PostController).to(PostController);
container.bind<IService>(TYPES.PostService).to(PostService);
container.bind<IMongoRepository>(TYPES.MongoRepository).to(BaseMongoRepository);

/* constants... */
container.bind<string>(TYPES.PostControllerName).toConstantValue("post-controller");
container.bind<string>(TYPES.PostRouterName).toConstantValue("post-router");
container.bind<string>(TYPES.PostRouterName).toConstantValue("post-service");
container.bind<string>(TYPES.MongoURL).toConstantValue(MongoURL);
container.bind<string>(TYPES.DBName).toConstantValue(DBName);

// var postController = container.get<IController>(TYPES.PostController);
// var postService = container.get<IService>(TYPES.PostService);
// var postRouter = container.get<IRouter>(TYPES.PostRouter);
// var repo = container.get<IMongoRepository>(TYPES.MongoRepository);

export default container;