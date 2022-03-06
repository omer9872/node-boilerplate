const TYPES = {
  MongoRepository: Symbol("MongoRepository"),

  PostRouter: Symbol("PostRouter"),
  PostRouterName: Symbol("post-router"),

  PostController: Symbol("PostController"),
  PostControllerName: Symbol("post-controller"),

  PostService: Symbol("PostService"),
  PostServiceName: Symbol("post-service"),

  /* ENV... */
  DBName: Symbol("DBName"),
  MongoURL: Symbol("MongoURL"),
};

export default TYPES;