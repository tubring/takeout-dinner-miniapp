import { View } from "@remax/one"
import { Map } from "@remax/wechat"
import React from "react"
import styles from './index.css'

export default(props)=>{
    
    const { longitude, latitude } = props

    return (
        <View className={styles.map_container}>
            <Map 
                longitude={longitude}
                latitude={latitude}
            />
        </View>
    )

}