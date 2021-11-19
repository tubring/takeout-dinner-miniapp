import { SELECT_TABLE } from '../actionTypes'

export const tableInfo = (state = {name:''}, action)=>{

    switch(action.type){

        case SELECT_TABLE:
            return {
                name: action.table
            }

        default:
            return state
    }

}
