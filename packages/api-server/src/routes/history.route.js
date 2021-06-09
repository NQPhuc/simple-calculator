import express from 'express';
import * as controller from '../controllers/index.js';

const router = express.Router();

router.get('/all', controller.HistoryController.getAllHistoryOfUser);
router.delete('/all', controller.HistoryController.clearUserHistory);

export default router;