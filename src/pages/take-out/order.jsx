import { View, Text } from '@remax/one'
import { Button } from 'annar'
import * as React from 'react'
import HeaderTable from '../../components/Header/table'
import OrderDetail from '../../components/OrderDetail'
import styles from './order.css'
import store from '../../store'

export default () =>{

    const dinnerType = "takeOut"
    const [menus, setMenus] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(()=>{
        setMenus(store.getState().cartList[dinnerType])

    },[])

    React.useEffect(()=>{
        let unsubscribe = store.subscribe(()=>{
            let newTotal = 0
            menus.forEach((item)=>{
                newTotal = item.menu_price*item.menu_quantity
            })
            setTotal(newTotal)
        })

        return ()=>{
            unsubscribe()
        }
    })

    return (
        <View className={styles.container}>
            
            <HeaderTable />
            <OrderDetail dinnerType={dinnerType} menus={menus} />

            <View className={styles.confirm}>
                <View className={styles.confirm_block}>
                    应付<Text className={styles.total_amount}>￥{total}</Text>
                </View>
                <View className={"row justify-between "+styles.confirm_block}>
                    <Button plain hairline shape="square">取消订单</Button>
                    <Button look="warning" plain shape="square">立即付款</Button>
                </View>
            </View>
        </View>
    )
}