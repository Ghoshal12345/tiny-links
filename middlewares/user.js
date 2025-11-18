// here we will check authenticated user
import { handleGetUser } from "../auth.js";
async function handleCheckAuthentication(req, res, next) {
    const token= req.cookies.uid;
    if(!token){
        res.status(401).redirect('/signin');
    }
    const user= handleGetUser(token);
    if(!user){
        res.status(401).redirect('/signin');
    }
    req.user= user;
    next();
}

async function checkAuth(req, res, next) {
    const token= req.cookies.uid;
    
    const user= handleGetUser(token);
    
    req.user= user;
    next();
}
export {
    handleCheckAuthentication,
    checkAuth
}