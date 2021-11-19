import { View } from '@remax/one'
import * as React from 'react'
import styles from './index.css'

export default (props)=>{

    const {className,} = props

    const [deliveryCost, setDeliveryCost] = React.useState(0)
    const [packageCost, setPackageCost] = React.useState(0)


    return (
        <View className={className}>
            <View className="row justify-between">
                <View>包装费</View>
                <View className={styles.cost}>{packageCost}</View>
            </View>
            <View className="row justify-between">
                <View>配送费</View>
                <View className={styles.cost}>{deliveryCost}</View>
            </View>
        </View>
        
    )
}