import * as React from 'react'
import { Image, Text, View } from '@remax/one'
import { Card, Icon } from 'annar'
import styles from './index.css'
import { connect } from 'react-redux'

const HeaderIndex = (props)=>{

    const { merchantInfo } = props

    return (
        <Card className={styles.header}>
            <View className={styles.store_image}>
                <Image src={merchantInfo.image}></Image>
            </View>
            <View className={styles.address}>
                <Icon type="locationfill" /> 
                <Text>{merchantInfo.address}</Text>
            </View>
            <View className={styles.logo}>
                <Image src={merchantInfo.logo}></Image>
            </View>
        </Card>
    )
}

export default connect(
    (state,props)=>{
        return {
            ...props,
            merchantInfo: state.merchantInfo
        }
    },
    null
)(HeaderIndex)