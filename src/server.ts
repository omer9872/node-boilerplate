import express = require("express");
import helmet from 'helmet';
import chalk from 'chalk';
require('dotenv').config()

import { IRouter } from "@base/router/interfaces";
import { serverPort } from "ENV";
import container from "./container";

import { PostRouter } from "@post/index";
import { UserRouter } from "@user/index";
import { AuthRouter } from "@auth/index";

const authRouter = container.get<IRouter>(AuthRouter.name);
const postRouter = container.get<IRouter>(PostRouter.name);
const userRouter = container.get<IRouter>(UserRouter.name);

const app = express();

app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(authRouter.getPath(), authRouter.getRoute())
app.use(postRouter.getPath(), postRouter.getRoute())
app.use(userRouter.getPath(), userRouter.getRoute())

app.listen(serverPort, () => { console.log(chalk.green(`Server is running on port: ${serverPort}`)) })

