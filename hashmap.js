// let's make authentication using hashmap

const handleSessionIdToUser= new Map();

function handleSetUser(sessionId, user){
    handleSessionIdToUser.set(sessionId, user);
}

function handleGetUser(sessionId){
    return handleSessionIdToUser.get(sessionId);
}

export{
    handleGetUser,
    handleSetUser
}