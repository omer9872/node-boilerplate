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

};

export default serviceTypes;