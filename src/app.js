import React from 'react'
import './app.css'
import 'annar/dist/annar.css'
import { Provider } from 'react-redux'
import store from './store'
import { SET_MERCHANT_INFO } from './store/actionTypes'

const App = props => {

    React.useEffect(()=>{

        setTimeout(()=>{ //模拟异步

            let info = {
                name:'Os云餐厅',
                logo:'/example/logo.jpg',
                image:'/example/store_image.jpg',
                address:'浦西万达广场B座',
                logitude: 118.8,
                latitude: 25.01
            }
            store.dispatch({
                type: SET_MERCHANT_INFO,
                merchantInfo: info
            })
            console.log('inital')
        },2000)
        
    },[])


    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
};

export default App