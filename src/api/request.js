import { getStorageSync, request } from "remax/wechat"

let token = getStorageSync('token')
let header = {
    Accept:'application/json',
    // "Content-Type":'application/json',
    Authorization:'Bearer ' + token,
}

export default ( data )=>{
    return request({...data,header})
}