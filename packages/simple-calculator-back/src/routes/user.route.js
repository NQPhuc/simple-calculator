import express from 'express';
import * as controller from '../controllers/index.js'

const router = express.Router();

router.post('/register', controller.UserController.registerNewUser);

export default router;