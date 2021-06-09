import express from 'express';
import * as controller from '../controllers/index.js';

const router = express.Router();

router.post('/', controller.CalcController.calculate);

export default router;