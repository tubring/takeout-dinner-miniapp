import { combineReducers } from 'redux'
import { cartList } from './cartList'
import { cartInfo } from './cartInfo'
import { userInfo } from './userInfo'
import { selectedAddress } from './selectedAddress'
import { tableInfo } from './tableInfo'
import { merchantInfo } from './merchantInfo'

export default combineReducers({
    merchantInfo,
    cartList,
    userInfo,
    selectedAddress,
    tableInfo,
    cartInfo
})