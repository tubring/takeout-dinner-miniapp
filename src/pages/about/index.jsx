import { View, Image } from "@remax/one"
import React from "react"
import Map from "../../components/Map"
import store from '../../store'
import { Icon, Button } from 'annar'
import styles from './index.css'

export default (props)=>{

    const merchantInfo = store.getState().merchantInfo

    return (
        <View className={styles.merchant_info}>

            <View className={styles.merchant_header}>
                <View className={styles.merchant_logo}>
                    <Image src={merchantInfo.logo} />
                </View>
                <View>
                    <View className={styles.merchant_title}>
                        <View className={styles.merchant_name}>
                            {merchantInfo.name}
                        </View>
                        <Button>营业中</Button>
                    </View>
                    <View className={styles.merchant_subtitle}>风味粤菜 | 10:00 - 22:00 </View>
                </View>
                
            </View>
            <View className={styles.merchant_list}>
                <View className={styles.merchant_location}>
                    <Icon type="location" size="36px" />
                    <View>{merchantInfo.address}</View>
                </View>
                
                <Icon type="phone" size="36px" />
            </View>
            <Map longitude={merchantInfo.longitude} latitude={merchantInfo.latitude} />
        </View>
    )

}