import { nanoid } from 'nanoid';
import URL from "../models/url.js";


async function handleGenerateShortUrl(req , res) {
    const shortId= nanoid(8);
    const ogUrl= req.body.url;
    console.log('Creating short URL:', { shortId, ogUrl });
    await URL.create({
        shortId: shortId,
        redirectUrl: ogUrl,
        createdBy: req.user._id,
    })
    const allUrls= await URL.find({ createdBy: req.user._id });
    res.status(201).render('home',{
        id: shortId,
        urls: allUrls
    })
}

async function handleGetRedirectUrl(req, res){
    const id= req.params.shortId;
    console.log('Looking for shortId:', id);
    const entry= await URL.findOne({shortId: id});
    console.log('Found entry:', entry);
    if(!entry)  return res.status(404).json({message: "Short URL not found"});
    res.redirect(entry.redirectUrl);
}

export {
    handleGenerateShortUrl,
    handleGetRedirectUrl
}