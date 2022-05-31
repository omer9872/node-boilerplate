import { injectable } from "inversify";
import 'reflect-metadata';

import { RequestHandler } from "express-serve-static-core";
import session = require('express-session')
const MongoStore = require('connect-mongo');

import { ISessionService } from "@auth/index";
import { MongoURL, DBName } from "../../ENV";
import { Request } from "express";
import { ILoginUser } from "@models/index";

declare module 'express-session' {
  interface SessionData {
    email: string;
  }
}

@injectable()
export class SessionService implements ISessionService {

  static lifeTime: number = 60 * 60;
  session: RequestHandler;
  constructor() {
    this.session = session({
      secret: 'keyboard cat',
      store: MongoStore.create({
        mongoUrl: `${MongoURL}/${DBName}`,
        ttl: SessionService.lifeTime
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: SessionService.lifeTime * 1000
      },
    })
  }

  create = (req: Request, user: ILoginUser) => {
    req.session.email = user.email;
  };

  delete = (req: Request) => {
    req.session.destroy((err) => {
      console.log(err);
    });
  };

}