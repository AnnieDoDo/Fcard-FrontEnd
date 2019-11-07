import{LogRegConstants} from '../constants/LogReg.constants.jsx';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function LogReg(state = {},action){
    switch(action.type){
        case LogRegConstants.REGISTER_REQUEST:
            return {
                registering: true
            };
        case LogRegConstants.REGISTER_SUCCESS:
            return {};
            
        case LogRegConstants.REGISTER_FAILURE:
            return {};

        case LogRegConstants.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            };
            
        case LogRegConstants.LOGIN_SUCCESS:
            return {
                    loggedIn: true,
                    user: action.user
            };
        case LogRegConstants.LOGIN_INVALIDPASSWORD:
            return {};

        case LogRegConstants.LOGIN_UNAUTHORIZED:
            return {};

        case LogRegConstants.LOGOUT:
            return {};

        default:
            return state
    }
}