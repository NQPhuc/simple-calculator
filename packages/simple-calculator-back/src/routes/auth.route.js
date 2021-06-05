import express from 'express';
import * as controller from '../controllers/index.js'

const router = express.Router();

router.post('/login', controller.AuthenticateController.login);

export default router;