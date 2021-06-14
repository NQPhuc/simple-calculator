import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';
import tokenGenerator from '../utils/token-generator.js';

export async function login (req, res) {
  const { username, password } = req.body;
  try {
    const user = await service.AuthenticateService.getUserByNameAndPassword(username, password);
    if (!user) {
      res.status(400).send("Failed");
      return;
    }

    const token = tokenGenerator(user);

    res.cookie('token', token, config.cookieOptions);
    res.status(200).send(user.username);
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}

export async function logout (req, res) {
  const { token } = req.cookies;
  res.clearCookie('token', config.clearCookieOptions);
  res.status(200).send("OK");
}

export async function verify (req, res) {
  const { token } = req.cookies;
  try {
    const data = await service.AuthenticateService.getUserDataByToken(token);
    if (data) {
      res.status(200).send(data.username);
    } else {
      res.status(400).send("Failed");
    }
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}
