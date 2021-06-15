import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';

export async function registerNewUser (req, res) {
  const { username, password } = req.body;
  try {
    const user = await service.UserService.createNewUser(username, password);
    if (user) {
      const userJson = user.toJSON();
      userJson.password = null;
      res.status(200).send({ message: "OK", user: userJson });
    } else {
      res.status(400).send("Failed");
    }
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}

export async function deleteUser (req, res) {
  // this function is here so eslint doesn't warn about prefer export default
  // I have no intention of implement it
  return "not implemented";
}
