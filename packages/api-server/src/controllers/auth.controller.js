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

    const jwtData = {
      id: user.id,
      username: user.username
    };
    const token = tokenGenerator(jwtData);

    res.cookie('token', token, config.cookieOptions);
    res.status(200).send(user.username);
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}

export async function logout (req, res) {
  res.clearCookie('token', config.clearCookieOptions);
  res.status(200).send("OK");
}

export async function verify (req, res) {
  const { userData } = req.body;
  try {
    if (userData) {
      res.status(200).send(userData.username);
    } else {
      res.status(400).send("Failed");
    }
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}
