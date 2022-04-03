const serviceTypes = {

  /* Auth Service... */
  AuthService: Symbol("AuthService"),
  AuthServiceName: Symbol("auth-service"),

  /* Session Service... */
  SessionService: Symbol("SessionService"),
  SessionServiceName: Symbol("session-service"),

  /* JsonWebToken Service... */
  JWTService: Symbol("JWTService"),
  JWTServiceName: Symbol("jwt-service"),

  /* Post Service... */
  PostService: Symbol("PostService"),
  PostServiceName: Symbol("post-service"),

  /* User Service... */
  UserService: Symbol("UserService"),
  UserServiceName: Symbol("user-service"),

};

export default serviceTypes;