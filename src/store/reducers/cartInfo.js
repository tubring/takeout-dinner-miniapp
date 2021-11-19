import { CART_CHANGE_QTY, CART_CLEAR_ALL } from '../actionTypes'

let initalCart = {
    list: [],
    total: 0
}

const cartInfo = (state = {dinnerIn: initalCart,takeOut: initalCart}, action)=>{

    let newState, index, dinnerType, total = 0
    dinnerType = action.dinnerType=="takeOut"?"takeOut":"dinnerIn"

    switch(action.type){
        
        case CART_CHANGE_QTY:
            newState = JSON.parse(JSON.stringify(state))
            
            index = newState[dinnerType].list.findIndex(item=>item.menu_id===action.menu.menu_id)

            if(index > -1 && action.value <= 0){
                console.log("zero")
                newState[dinnerType].list.splice(index)
            }else if(index > -1){
                newState[dinnerType].list[index].menu_quantity = action.value
            }else{
                newState[dinnerType].list.push({
                    menu_id: action.menu.menu_id,
                    menu_name: action.menu.menu_name,
                    menu_price: action.menu.menu_price,
                    image: action.menu.image,
                    menu_quantity: action.value
                })
            }

            //计算总额
            newState[dinnerType].list.forEach((item)=>{
                total += item.menu_quantity*item.menu_price
            })
            newState[dinnerType].total = total
            return newState

        
        case 'cart/remove':
            newState = JSON.parse(JSON.stringify(state))
            index = newState[dinnerType].findIndex(item=>item.menu_id===action.menu.menu_id)

            if(index > -1 ){
                newState[dinnerType].list.splice(index)
            }
            //计算总额
            newState[dinnerType].list.forEach((item)=>{
                total += item.menu_quantity*item.menu_price
            })
            newState[dinnerType].total = total
            return newState

        //清空购物车
        case CART_CLEAR_ALL:
           
            return {
                ...state,
                [dinnerType]:{
                    list: [],
                    total: 0
                }
            }
        
        default:
            return state
    }

}

export { cartInfo }