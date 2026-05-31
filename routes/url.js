import express from 'express';
import { handleGenerateShortUrl, handleGetRedirectUrl } from '../controllers/url.js';

const router = express.Router();
router.post('/', handleGenerateShortUrl);
router.get('/:shortId', handleGetRedirectUrl)

export default router; 