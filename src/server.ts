import express = require("express");
import helmet from 'helmet';
require('dotenv').config()

import { IRouter } from "@base/router/interfaces";
import { routerTypes } from "./TYPES";
import { serverPort } from "ENV";
import container from "./container";

const authRouter = container.get<IRouter>(routerTypes.AuthRouter);
const postRouter = container.get<IRouter>(routerTypes.PostRouter);
const userRouter = container.get<IRouter>(routerTypes.UserRouter);

const app = express();

app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(sessionService.session);
app.use(authRouter.getPath(), authRouter.getRoute())
app.use(postRouter.getPath(), postRouter.getRoute())
app.use(userRouter.getPath(), userRouter.getRoute())

app.listen(serverPort, () => { console.log(`Server is running at port: ${serverPort}`) })

