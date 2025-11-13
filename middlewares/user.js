// here we will check authenticated user
import { handleGetUser } from "../hashmap.js";
async function handleCheckAuthentication(req, res, next) {
    const cookie= req.cookies.sessionId;
    if(!cookie){
        res.status(401).redirect('/signin');
    }
    const user= handleGetUser(cookie);
    if(!user){
        res.status(401).redirect('/signin');
    }
    req.user= user;
    next();
}

async function checkAuth(req, res, next) {
    const cookie= req.cookies.sessionId;
    
    const user= handleGetUser(cookie);
    
    req.user= user;
    next();
}
export {
    handleCheckAuthentication,
    checkAuth
}