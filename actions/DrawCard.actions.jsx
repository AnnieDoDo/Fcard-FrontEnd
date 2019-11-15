import { DrawCardConstants } from '../constants/DrawCard.constants.jsx';
import { DrawCardService } from '../service/DrawCard.service.jsx';
import { history } from '../helpers/history.jsx'

export const DrawCardActions = {
    DrawCard,
    GetPersonalData,
    TurnToMainPage,
};

function DrawCard(){
    return dispatch => {

        dispatch(request({}));
        DrawCardService.DrawCard()
        .then(resString => {
            //console.log(typeof(resString))
            console.log(resString)
            if(resString)
            {
                dispatch(success());
                history.push('/drawcardpage');
            }else if(resString=='drawFail')
            {
                dispatch(failure());
            }
        })

    };
    function request() {return { type : DrawCardConstants.DRAWCARD_REQUEST}}
    function success() {return { type : DrawCardConstants.DRAWCARD_SUCCESS}}
    function failure() {return { type : DrawCardConstants.DRAWCARD_FAILURE}}

}

function GetPersonalData(){
    return dispatch => {

        dispatch(request({}));
        DrawCardService.GetPersonalData()
        .then(personaldata => {
            //console.log(personaldata)
            let pdata = JSON.parse(personaldata)
            //console.log(pdata)
            if(personaldata=="getFail")
            {
                dispatch(failure(personaldata))
            }else{
                dispatch(success(pdata))
                console.log(pdata)
            }
        })
    };
    function request() { return { type : DrawCardConstants.GET_PERSONAL_DATA_REQUEST}}
    function success(pdata) { return { type : DrawCardConstants.GET_PERSONAL_DATA_SUCCESS, pdata}}
    function failure(error) { return { type : DrawCardConstants.GET_PERSONAL_DATA_FAILURE, error}}
}

function TurnToMainPage(){
    return dispatch => {
        dispatch(request());
        history.push('/mainpage');
    };

    function request() {return { type : DrawCardConstants.DRAWCARD_TURN_TO_MAINPAGE}}
}

