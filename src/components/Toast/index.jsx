import { showToast } from 'remax/wechat'

const Toast = {
    success: (title)=>{
        showToast({
            title: title,
            icon: 'SUCCESS',
            duration:2000,
            mask:true
        })
    },
    loading: (title)=>{
        showToast({
            title: title,
            icon: 'loading',
            duration:2000,
            mask:true
        })
    },
    error: (title)=>{
        showToast({
            title: title,
            icon: 'error',
            duration:2000,
            mask:true
        })
    },
}

export default Toast