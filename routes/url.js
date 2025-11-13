import express from 'express';
import { handleGenerateShortUrl, handleGetRedirectUrl } from '../controllers/url.js';

const router = express.Router();

// router.get('/', (req, res)=>{
//     res.render('home');
// })
router.post('/', handleGenerateShortUrl);
router.get('/:shortId', handleGetRedirectUrl)

export default router;