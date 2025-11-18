import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

function handleSetUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
    }, secretKey);
}

function handleGetUser(token) {
    if(!token) return null;
    try{
        return jwt.verify(token, secretKey);
    }catch(err){
        return null;
    }
    
}

export{
    handleGetUser,
    handleSetUser
}