import { View, Text } from '@remax/one'
import { useQuery } from 'remax'
import { Button } from 'annar'
import * as React from 'react'
import HeaderTable from '../../components/Header/table'
import OrderDetail from '../../components/OrderDetail'
import styles from './order.css'
import store from '../../store'
import { navigateTo, request } from '@remax/wechat'

export default (props) =>{

    const dinnerType = "dinnerIn"
    const query = useQuery()
    const table = query.table

    const [menus, setMenus] = React.useState([]);
    const [total, setTotal] = React.useState(0)

    React.useEffect(()=>{
        console.log('table：',table)
        setMenus(store.getState().cartList[dinnerType])

        let newTotal = 0
        menus.forEach((item)=>{
            newTotal = item.menu_price*item.menu_quantity
        })
        setTotal(newTotal)

    },[])

    return (
        <View className={styles.container}>
            
            <HeaderTable table={table}/>
            <OrderDetail dinnerType={dinnerType} menus={menus}  />

            <View className={styles.confirm}>
                <View className={styles.confirm_left}>
                    应付<Text className={styles.total_amount_txt}>￥{total}</Text>
                </View>
                <View className={styles.button_group}>
                    <Button plain hairline shape="square">取消订单</Button>
                    <Button look="warning" plain shape="square" onTap={()=>{
                        // request().then((res)=>{
                        //     //成功
                        //     navigateTo({url:'/pages/dinner/checkout'})
                        // })

                        navigateTo({url:'/pages/dinner/checkout'})

                    }}>确认下单</Button>
                </View>
            </View>
        </View>
    )
}