import express from "express";
import TYPES from "./types/types";
import { container } from "./container";
import { PostRoutes } from "./routes/Post.routes";
import { PostFeature } from "./features/Post.feature";
import { PostController } from "./controllers/Post.controller";
import { PostService } from "./services/Post.service";
import { Repository } from "./dev/Repository";
import { Routes } from "./dev/Routes";
import { IRoutes } from "./dev/types";

const app = express();
app.listen(3000, () => { console.log(3000) })

setTimeout(() => {
  const r = container.get<IRoutes>(TYPES.PostRoutes);
}, 1000)