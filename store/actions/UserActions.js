import { SET_USER_SESSION, LOG_USER_OUT, LOG_USER_IN, SAVE_USER } from '../constants/ConstantsActions';

const logUserIn = (user) => {
    // console.log("worked")
    return {
        type: LOG_USER_IN,
        payload: user
    }
}

const setUserSession = (userSession) => {
    return {
        type: SET_USER_SESSION,
        payload: userSession
    }
}

const saveUser = (userSession) => {
    return {
        type: SAVE_USER,
        payload: userSession
    }
}

const logUserOut = () => {
    return {
        type: LOG_USER_OUT
    }
}


export default {
    setUserSession,
    logUserOut,
    logUserIn,
    saveUser,
}