const {ADMITCARD_REQUEST,ADMITCARD_SUCCESS,ADMITCARD_FAIL, CLEAR_ERRORS,}= require("../constants/studentAdmitCardConstants");


export const AdmitcardReducer = (state={admitCardDetails:[]},action)=>{
    switch(action.type){
        case ADMITCARD_REQUEST:
            return{
                loading:true,
                saved:false
            }
        case ADMITCARD_SUCCESS:
            return{
                loading:false,
                saved:true,
                admitCardDetails:action.payload
            }
        case ADMITCARD_FAIL:
            return{
                loading:false,
                saved:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
            ...state,
            error:null
            };

        default:
           return state;

    }
}