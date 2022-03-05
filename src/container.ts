import 'reflect-metadata';
import { Container } from "inversify";
import TYPES from "./types/types";
import { Repository } from './dev/Repository';
import { PostFeature } from './features/Post.feature';
import { PostService } from './services/Post.service';
import { PostController } from './controllers/Post.controller';
import { PostRoutes } from './routes/Post.routes';
import { IController, IFeature, IRoutes } from './dev/types';
import { Routes } from './dev/Routes';

const container = new Container();
container.bind<IRoutes>(TYPES.PostRoutes).to(PostRoutes);

export { container }