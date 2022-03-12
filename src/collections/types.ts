const collectionTypes = {

  /* Post ENV... */
  PostCollection: Symbol("PostCollection"),
  PostCollectionName: Symbol("posts"),

  /* User ENV... */
  UserCollection: Symbol("UserCollection"),
  UserCollectionName: Symbol("users"),

  /* Repository... */
  MongoRepository: Symbol("MongoRepository"),
  DBName: Symbol("DBName"),
  MongoURL: Symbol("MongoURL"),

};

export default collectionTypes;