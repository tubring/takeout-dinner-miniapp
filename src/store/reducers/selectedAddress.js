import { SELECT_ADDRESS } from '../actionTypes'

let initalState = {id:1,address:'浦西万达广场',phone:'13588889999',name:'丫丫'}

export const selectedAddress = (state = initalState, action)=>{

    switch(action.type){

        case SELECT_ADDRESS:
            return action.address

        default:
            return state
    }

}
