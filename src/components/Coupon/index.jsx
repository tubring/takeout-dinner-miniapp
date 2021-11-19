import * as React from 'react'
import { Button } from 'annar'
import { View, Text } from '@remax/one'
import styles from './index.css'


export default () => {

    const [coupons, setCoupons] = React.useState([]) 

    React.useEffect(()=>{
        setCoupons([
            {id:1, value:20,expired_at:'2021-10-01'},
            {id:2, value:20,expired_at:'2021-10-01'},
        ])
    },[])

    const renderCoupon = coupons.map((coupon)=>{

        return (
            <View key={coupon.id} className={styles.coupon_item}>
                
                <View className={styles.coupon_info}>
                    <View>￥<Text className={styles.coupon_value}>{coupon.value}</Text></View>
                    <View>满100元可用</View>
                </View>
                <View className={styles.coupon_info}>
                    <View>通用</View>
                    <View>有效期至{coupon.expired_at}</View>
                </View>
                <View className={styles.coupon_info}>
                    <Button type="primary" size="small">领取</Button>
                    <View>剩余999份</View>
                </View>
            </View>
        )
    })

    return (
        <>
            {renderCoupon}
        </>
    )

}