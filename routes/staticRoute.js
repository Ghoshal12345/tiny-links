import express from 'express';
import URL from '../models/url.js';

const staticRouter= express.Router();
staticRouter.get('/', async (req, res)=>{
    if(!req.user){
        return res.redirect('/signin');
    }
    const allUrls= await URL.find({createdBy: req.user._id});
    res.render('home', { urls: allUrls });
});
staticRouter.get('/signin', (req, res)=>{
    res.render('signin');
})
staticRouter.get('/signup', (req, res)=>{
    res.render('signup');
})
export default staticRouter;