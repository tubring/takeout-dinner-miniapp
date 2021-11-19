import * as React from 'react'
import { Image, View } from '@remax/one'
import { Icon } from 'annar'
import { connect } from 'react-redux'
import styles from './index.css'

const AboutUI = (props) => {

    const { merchantInfo } = props

    return (
        <>
            <View>商家信息</View>
            <View className>
                <Icon type="location" />
                <View>{locationInfo.location_address_1}</View>
                <Icon type="phone" />
            </View>
            <View>
                <Icon type="time" />
                <View>工作日: {locationInfo.openning_hour}</View>
            </View>
        </>
    )
}

export default connect(
    (state)=>{
        merchantInfo: state.merchantInfo
    }
)(AboutUI)