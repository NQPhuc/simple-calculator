import express from 'express';
import * as controller from '../controllers/index.js';

const router = express.Router();

router.post('/login', controller.AuthenticateController.login);
router.get('/', controller.AuthenticateController.verify);
router.get('/logout', controller.AuthenticateController.logout);

export default router;
