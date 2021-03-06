import AuthenticateRoute from './auth.route.js';
import UserRoute from './user.route.js';
import CalcRoute from './cal.route.js';
import HistoryRoute from './history.route.js';
import AuthMiddleware from '../middleware/auth.middle.js';

export default (app) => {
  app.use('*', AuthMiddleware);
  app.use('/auth', AuthenticateRoute);
  app.use('/user', UserRoute);
  app.use('/calc', CalcRoute);
  app.use('/history', HistoryRoute);
};
