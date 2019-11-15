import{ DrawCardConstants } from '../constants/DrawCard.constants.jsx';

export function DrawCard(state = {},action){
    switch(action.type){
        case DrawCardConstants.DRAWCARD_REQUEST:
            return {
                drawing: true
            };
        case DrawCardConstants.DRAWCARD_SUCCESS:
            return {};
        case DrawCardConstants.DRAWCARD_FAILURE:
            return {};

        case DrawCardConstants.DRAWCARD_TURN_TO_MAINPAGE:
            return {};

        case DrawCardConstants.GET_PERSONAL_DATA_REQUEST:
            return {
                loading: true
            }
        
        case DrawCardConstants.GET_PERSONAL_DATA_SUCCESS:
            return {
                pdata: action.pdata
            }

        case DrawCardConstants.GET_PERSONAL_DATA_FAILURE:
            return {
                error: action.error
            }
            
        default:
            return state
    }
}