import { CART_CHANGE_QTY, CART_CLEAR_ALL } from '../actionTypes'

const cartList = (state = {dinnerIn:[],takeOut:[]}, action)=>{

    let newState, index, dinnerType
    dinnerType = action.dinnerType=="takeOut"?"takeOut":"dinnerIn"

    switch(action.type){
        
        case CART_CHANGE_QTY:
            newState = JSON.parse(JSON.stringify(state))
            
            index = newState[dinnerType].findIndex(item=>item.menu_id===action.menu.menu_id)

            if(index > -1 && action.value <= 0){
                newState[dinnerType].slice(index, 1)
            }else if(index > -1){
                newState[dinnerType][index].menu_quantity = action.value
            }else{
                newState[dinnerType].push({
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
            index = newState[dinnerType].findIndex(item=>item.menu_id===action.menu.id)

            if(index > -1){
                newState[dinnerType][index].menu_quantity++
            }else{
                newState[dinnerType].push({
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
            index = newState[dinnerType].findIndex(item=>item.menu_id===action.menu.id)

            if(index > -1 ){
                newState[dinnerType][index].menu_quantity--
                if(newState[dinnerType][index].menu_quantity==0){
                    newState[dinnerType].slice(index,1)
                }
            }
            return newState
        
        case 'cart/remove':
            newState = JSON.parse(JSON.stringify(state))
            index = newState[dinnerType].findIndex(item=>item.menu_id===action.menu.menu_id)

            if(index > -1 ){
                newState[dinnerType].slice(index)
            }
            return newState

        //清空购物车
        case CART_CLEAR_ALL:
           
            return {
                ...state,
                [dinnerType]:[]
            }
        
        default:
            return state
    }

}

export { cartList }