import {LogRegConstants} from '../constants/LogReg.constants.jsx';
import {LoginRegService} from '../service/LogReg.service.jsx';
import {alertActions} from './alert.action.jsx';
import {history} from '../helpers/history.jsx'

export const LogRegActions = {
    login,
    logout,
};

function login(email, password){
    return dispatch => {

        dispatch(request({email}));

        LoginRegService.login(email,password)
        .then(resString => {
            //console.log(typeof(resString))
            console.log(resString)
            
            if(resString=='Invalid password')
            {
                dispatch(invalidPassword(resString));
                dispatch(alertActions.error(resString));
            }else if(resString=='Unauthorized!')
            {
                dispatch(unauthorized(resString));
                dispatch(alertActions.error(resString));
            }else if(resString=='logSubOK'){
                dispatch(success(resString));
                console.log("Login success")
                history.push('/mainpage');
            }
        })
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