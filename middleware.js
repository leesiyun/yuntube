import routes from './routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'Yuntube';
  res.locals.routes = routes;
  next();
};
