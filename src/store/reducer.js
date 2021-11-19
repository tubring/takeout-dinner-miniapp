import { combineReducers } from 'redux'
import { CART_CHANGE_QTY, CART_CLEAR_ALL, SELECT_ADDRESS } from './actionTypes'

const initalState = {
    userInfo: '',
    cartList: [],
    selectedAddress: [],
    coupons: []
}

const globalReducer = (state = initalState, action)=>{

    let newState, index

    switch(action.type){
        
        case 'fakeUserInfo':
            return {
                ...state, 
                userInfo:{nickname:'John Doe', avatar:''} 
            }

        case CART_CHANGE_QTY:
            newState = JSON.parse(JSON.stringify(state))
            index = newState.cartList.findIndex(item=>item.menu_id===action.menu.menu_id)
            console.log("action:",action)

            if(index > -1 && action.value <= 0){
                newState.cartList.slice(index, 1)
            }else if(index > -1){
                newState.cartList[index].menu_quantity = action.value
            }else{
                newState.cartList.push({
                    menu_id: action.menu.menu_id,
                    menu_name: action.menu.menu_name,
                    menu_price: action.menu.menu_price,
                    image: action.menu.image,
                    menu_quantity: action.value
                })
            }
            return newState

        case 'cart/increament':
            newState = JSON.parse(JSON.stringify(state))
            index = newState.cartList.findIndex(item=>item.menu_id===action.menu.id)

            if(index > -1){
                newState.cartList[index].menu_quantity++
            }else{
                newState.cartList.push({
                    menu_id: action.menu.menu_id,
                    menu_name: action.menu.menu_name,
                    menu_price: action.menu.menu_price,
                    image: action.menu.image,
                    menu_quantity: 1
                })
            }
            return newState

        case 'cart/decreament':
            newState = JSON.parse(JSON.stringify(state))
            index = newState.cartList.findIndex(item=>item.menu_id===action.menu.id)

            if(index > -1 ){
                newState.cartList[index].menu_quantity--
                if(newState.cartList[index].menu_quantity==0){
                    newState.cartList.slice(index,1)
                }
            }
            return newState
        
        case 'cart/remove':
            newState = JSON.parse(JSON.stringify(state))
            index = newState.cartList.findIndex(item=>item.menu_id===action.menu.menu_id)

            if(index > -1 ){
                newState.cartList.slice(index)
            }
            return newState

        //清空购物车
        case CART_CLEAR_ALL:
           
            return {
                ...state, 
                cartList:[]
            }
        
        //
        case SELECT_ADDRESS:

            return {
                ...state,
                selectedAddress: addressInfo
            }

        default:
            return state
    }

}

export default combineReducers({
    globalReducer
})