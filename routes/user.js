import express from 'express';
import { handleUserSignin, handleUserSignup } from '../controllers/user.js';

const router= express.Router();

router.post('/signup', handleUserSignup);
router.post('/signin', handleUserSignin);

export default router;