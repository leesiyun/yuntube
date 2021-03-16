import express from 'express';
import { join, login, logout, users } from '../controllers/userController';
import { home, search, videos } from '../controllers/videoController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.users, users);
globalRouter.get(routes.videos, videos);

export default globalRouter;
