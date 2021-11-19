import { View, Text } from '@remax/one'
import { useQuery } from 'remax'
import { Button } from 'annar'
import * as React from 'react'
import HeaderTable from '../../components/Header/table'
import OrderDetail from '../../components/OrderDetail'
import styles from './checkout.css'
import store from '../../store'
import { requestPayment } from '@remax/wechat'

export default (props) =>{

    const dinnerType = "dinnerIn"
    const query = useQuery()
    const table = query.table

    const [menus, setMenus] = React.useState([]);

    React.useEffect(()=>{
        console.log('table：',table)
        setMenus(store.getState().cartList[dinnerType])
    },[])

    return (
        <View className={styles.container}>
            
            <HeaderTable table={table}/>
            <OrderDetail dinnerType={dinnerType} menus={menus}  />

            <View className={styles.confirm}>
                <View className={styles.confirm_left}>
                    应付<Text className={styles.total_amount_txt}>￥200.00</Text>
                </View>
                <View className="row justify-between">
                    <Button look="warning" plain shape="square" onTap={()=>{
                        // requestPayment().then()
                    }}>去结账</Button>
                </View>
            </View>
        </View>
    )
}