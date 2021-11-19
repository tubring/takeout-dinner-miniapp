import { SET_MERCHANT_INFO } from '../actionTypes'

export const merchantInfo = (state = {name:'',image:'',logo:'',address:''}, action)=>{

    switch(action.type){

        case SET_MERCHANT_INFO:

            return action.merchantInfo

        default:
            return state
    }
}
