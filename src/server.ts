import express = require("express");
require('dotenv').config()

import TYPES from "./TYPES";
import container from "./container";
import { IRouter } from "./routers/interfaces";

const router = container.get<IRouter>(TYPES.PostRouter);
console.log(router.getPath());

const app = express();
app.listen(3000, () => { console.log(3000) })

app.use(router.getPath(), router.getRoute())