import * as React from 'react'
import { View, Image, Text} from '@remax/one'
import { scanCode } from '@remax/wechat'
import { Icon } from 'annar'
import styles from './table.css'
import { connect } from 'react-redux'
import { SELECT_TABLE } from '../../store/actionTypes'

const HeaderTable = (props)=>{

    const {table,switchTable} = props

    return (
        <View className={styles.header}>
            <View className={styles.table_info}>
                <Image src="/icon/table-grey.png" className={styles.table_icon}></Image>
                <View>桌号:<Text className={styles.text_orange}>{table}</Text></View>
            </View>
            <View 
                className={styles.scan_info} 
                onTap={
                    ()=>scanCode({
                        onlyFromCamera:false,
                        success(res){
                            console.log("扫码成功:",JSON.stringify(res))
                            let result = res.result
                            switchTable('testTable')
                        },
                    }) 
                }
            >
                <View className={styles.scan_text}>扫码更换</View>
                <Icon type="scan" size="60px" color="#0099FF" />
            </View>
        </View>
    )
}

export default connect(
    (state, props)=>{
        return {
            ...props,
            table: props.table??state.tableInfo.name
        }
    },
    (dispatch)=>{
        return{
            switchTable: (table)=>{
                dispatch({
                    type: SELECT_TABLE,
                    table
                })
            }
        }
    }
)(HeaderTable)