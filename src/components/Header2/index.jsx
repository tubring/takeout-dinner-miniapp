import { View, Image } from "@remax/one"
import React from "react"
import { Icon, Button } from 'annar'
import { connect } from 'react-redux'
import styles from './index.css'

const HeaderUI = (props)=>{

    const { merchantInfo } = props
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
        </View>
    )

}

export default connect(
    (state)=>({
        merchantInfo: state.merchantInfo
    }),
    null
)(HeaderUI)