import express from 'express';
import * as controller from '../controllers/index.js';

const router = express.Router();

router.get('/all', controller.HistoryController.getAllHistoryOfUser);

export default router;