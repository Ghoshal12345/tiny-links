// here we will check authenticated user
import { handleGetUser } from "../auth.js";

// * Middleware to check authentication (from cookies)
function checkForAuthentication(req, res, next) {
    const token = req.cookies['uid'];
    req.user = null;
    if (!token) {
        return next();
    }

    const user = handleGetUser(token);
    req.user = user;
    next();
}

// * Middleware to restrict access to authenticated users only----means authorization 
function restrictToAuthenticatedUsers(req, res, next) {
    if (!req.user) {
        return res.status(401).redirect('/signin');
    }
    return next();
}
export {
    checkForAuthentication,
    restrictToAuthenticatedUsers
}