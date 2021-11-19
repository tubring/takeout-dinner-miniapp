import { View, navigateTo } from '@remax/one'
import { Button, Icon, Picker } from 'annar'
import * as React from 'react'
import styles from './address.css'
import { connect } from 'react-redux'

const HeaderAddressUI = (props)=>{

    const {address, addressList, handleChange} = props

    return (
        <View className={styles.header}>

            {address?
            <View className={styles.address_info}>
                <Icon type="locationfill" size="42px" />
                <View>
                    <View>{address.address}</View>
                    <View>{address.name} - {address.phone}</View>
                </View>
                <Picker range={addressList} rangeKey="address" onChange={(v)=>{
                    handleAddressChange(v)
                }}>
                    <Icon type="right" size="42px" />
                </Picker>
            </View>
            :<View>
                <Button size="large" shape="square" block onTap={()=>{
                    navigateTo({url:'/pages/address/edit'})
                }}>添加收货地址</Button>
            </View>
            }
            <View className={styles.address_info}>
                <Icon type="timefill" size="42px" />
                <View>立即送出</View>
                <View>(大约12：05送达)</View>
                <Icon type="right" size="42px" />
            </View>
        </View>
    )
}

export default connect(
    null,
    (dispatch)=>({
        handleAddressChange: (v)=>{
            dispatch({
                type: SELECT_ADDRESS,
                address: addressList[v]
              })
        }
    })
)(HeaderAddressUI)
