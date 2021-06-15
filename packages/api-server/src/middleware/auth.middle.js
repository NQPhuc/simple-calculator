import * as service from '../services/index.js';

export default async function authenticate (req, res, next) {
  const { token } = req.cookies;
  try {
    const data = await service.AuthenticateService.getUserDataByToken(token);
    req.body.userData = data;
  } catch (e) {
    req.body.userData = null;
  }
  next();
}
