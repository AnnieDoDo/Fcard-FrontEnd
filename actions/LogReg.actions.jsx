import {LogRegConstants} from '../constants/LogReg.constants.jsx';
import {LoginRegService} from '../service/LogReg.service.jsx';
import {alertActions} from './alert.action.jsx';
import {history} from '../helpers/history.jsx'

export const LogRegActions = {
    login,
    logout,
};

function login(email, password){
    return dispatch =>{
        dispatch(request({email}));

        LoginRegService.login(email,password)
        .then(
            user =>{
                dispatch(success(user));
                history.pushState('/');
            },
            error =>{
                if(error=='Invalid password')
                {
                    dispatch(invalidPassword(error));
                    dispatch(alertActions.error(error));
                }else if(error=='Unauthorized!')
                {
                    dispatch(unauthorized(error));
                    dispatch(alertActions.error(error));
                }
            }
        )

    };
    
    function request(user) {return { type : LogRegConstants.LOGIN_REQUEST,user}}
    function success(user) {return { type : LogRegConstants.LOGIN_SUCCESS,user}}
    function invalidPassword(error) {return { type : LogRegConstants.LOGIN_INVALIDPASSWORD,error}}
    function unauthorized(error) {return { type : LogRegConstants.LOGIN_UNAUTHORIZED,error}}
}

function logout() {
    LogRegService.logout();
    return { type: LogRegConstants.LOGOUT };
  }