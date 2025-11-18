import USER from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import { handleSetUser } from "../auth.js";

async function handleUserSignup(req, res) {
    const {name, email, password}= req.body;
    await USER.create({
        name,email,password
    })
    return res.status(201).redirect('/signin');
    
}

async function handleUserSignin(req, res) {
    const {email, password}= req.body;
    const user= await USER.findOne({email, password})
    if(!user){
        return res.status(401).render('signin', {message: "Invalid credentials"});
    }
    const token = handleSetUser(user);
    res.cookie('uid', token);
    return res.status(200).redirect('/');
}

export {
    handleUserSignup,
    handleUserSignin
}