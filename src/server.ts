import express = require("express");
require('dotenv').config()

import { routerTypes } from "./TYPES";
import container from "./container";
import { IRouter } from "./routers/interfaces";
import { ISessionService } from "./auth";
import serviceTypes from "./services/types";

// const authRouter = container.get<IRouter>(routerTypes.AuthRouter);
const sessionService = container.get<ISessionService>(serviceTypes.SessionService);

const authRouter = container.get<IRouter>(routerTypes.AuthRouter);
const postRouter = container.get<IRouter>(routerTypes.PostRouter);
const userRouter = container.get<IRouter>(routerTypes.UserRouter);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(sessionService.session);
app.use(authRouter.getPath(), authRouter.getRoute())
app.use(postRouter.getPath(), postRouter.getRoute())
app.use(userRouter.getPath(), userRouter.getRoute())

app.listen(3000, () => { console.log(3000) })

