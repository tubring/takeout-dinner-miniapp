import { View, Image, Text, Label } from '@remax/one'
import { Cell } from 'annar'
import * as React from 'react'
import DeliveryCost from '../DeliveryCost'
import styles from './index.css'
import store from '../../store'

export default (props) => {

    const menus = props.menus
    const [coupons, setCoupons ] = React.useState([])
    const [couponId, setCouponId ] = React.useState(0)
    const dinnerType = props.dinnerType=="takeOut"?"takeOut":"dinnerIn"

    React.useEffect(()=>{

        // setMenus([
        //     {menu_id:1,menu_name:'水煮鱼',image:'/example/dinner1.jpeg',menu_price:25.99,menu_quantity:1},
        //     {menu_id:2,menu_name:'水煮鱼',image:'/example/dinner2.jpeg',menu_price:25.99,menu_quantity:2},
        // ])
        // setMenus(store.getState().cartList[dinnerType])
        setCoupons([
            {id:1,title:'',value:''}
        ])
    },[])
    
    const renderMenu = menus.map((item)=>{

        return (
            <View className={styles.menu_item} key={item.menu_id}>
                <View className={styles.menu_image}>
                    <Image src={item.image} />
                </View>
                <View className={styles.menu_detail}>
                    <View>{item.menu_name}</View>
                    <View className={styles.menu_info}>
                        <View>￥ {item.menu_price}</View>
                        <View>x {item.menu_quantity}</View>
                    </View>
                </View>
            </View>
        )
    })


    return (
        <View className={styles.order_detail+' block'}>
            <View>订单明细</View>
            {menus?renderMenu:''}
            {
                dinnerType=='takeOut'?
                <DeliveryCost className={styles.delivery_info} />:null
            }
            <Cell.Picker
                label="优惠券"
                placeholder="无"
                align="right"
                arrow
                range={coupons}
                rangeKey=""
                value={couponId}
                onChange={(v) => setCouponId(v)}
            />
            <Cell.Input 
                label="备注"
                placeholder="无"
                align="right"
                arrow
                onChange={(v) =>{}}
            />
        </View>
    )
}
