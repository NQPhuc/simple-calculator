import * as service from '../services/index.js';
import db from '../models/core.js';
import * as config from '../config.js';

export async function getAllHistoryOfUser (req, res) {
  const { userData } = req.body;
  try {
    if (!userData) {
      res.status(403).send("Not logged in");
      return;
    }

    const userWithHistories = await service.HistoryService.getAllHistoryOfUser(userData.id);
    if (userWithHistories) {
      res.status(200).send(userWithHistories.Histories);
    } else {
      res.status(400).send("Failed");
    }
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}

export async function clearUserHistory (req, res) {
  const { userData } = req.body;
  try {
    if (!userData) {
      res.status(403).send("Not logged in");
      return;
    }
    const dbOperationResult = await service.HistoryService.deleteAllHistoryOfUser(userData.id);
    res.status(200).send(`row delete: ${dbOperationResult}`);
  } catch (e) {
    res.status(500).send("Database operation failed");
  }
}
