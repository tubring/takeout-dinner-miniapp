import * as React from 'react'
import styles from './detail.css'
import OrderDetail from '../../components/OrderDetail'
import { View } from '@remax/one'

export default ()=>{

    const [order,setOrder] = React.useState({id:1,order_no:'20210925K001',menu_list:[{menu_id:1,menu_name:'水煮鱼',image:'/example/dinner1.jpeg',menu_quantity:2},{menu_id:2,menu_name:'酸菜鱼',image:'/example/dinner2.jpeg',menu_quantity:2}],created_at:'2021-09-25',status:'未付款',number:3,total_amount:25})

    React.useEffect(()=>{
        setOrder(
            {id:1,order_no:'20210925K001',menu_list:[{menu_id:1,menu_name:'水煮鱼',image:'/example/dinner1.jpeg',menu_quantity:2},{menu_id:2,menu_name:'酸菜鱼',image:'/example/dinner2.jpeg',menu_quantity:2}],created_at:'2021-09-25',status:'未付款',number:3,total_amount:25}
        )
            
    },[])

    return (
        <View className={styles.detail_container}>
            <View className={styles.order_header}>
                <View className={styles.order_title}>
                    <View>订单号:{order.order_no}</View>
                    <View>{order.status}</View>
                </View>
            </View>

            <OrderDetail menus={order.menu_list} />

        </View>
    )
}