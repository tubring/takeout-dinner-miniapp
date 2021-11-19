import { Icon, Stepper } from 'annar';
import * as React from 'react';
import { View, Modal, navigateTo } from 'remax/one';
import styles from './index.css'
import { connect } from 'react-redux'
import { CART_CHANGE_QTY, CART_CLEAR_ALL } from '../../store/actionTypes'
import Toast from '../Toast';

const ShoppingCart = (props) => {

    const dinnerType = props.type=="takeOut"?"takeOut":"dinnerIn"
    const {cartList, total, checkoutUrl, handleChange, handleClearAll} = props

    const [show, setShow] = React.useState(false);

    const renderCartList = cartList.map((item)=>{
        return (
            <View key={item.menu_id} className={styles.cart_item}>
                <View className={styles.menu_name}>{item.menu_name}</View>
                <View className={styles.menu_price}>￥{item.menu_price}</View>
                <View className={styles.menu_quantity}>
                    <Stepper
                        bgColor="#FFC409"
                        shape="circle"
                        plain
                        value={item.menu_quantity}
                        min={0}
                        onChange={(val) => {
                            console.log("change val:", val)
                            handleChange(item,val)
                        }}
                    />
                </View>
            </View>
        )
    })

    const handleCheckOut = (url)=>{
        if(cartList.length == 0){
            Toast.error("请添加菜单!")
            return
        }
        navigateTo({url:url})
    }

    return (
        <View className={styles.cart}>
            <View className={show?'':'hidden'}>
                <View className={styles.cart_title}>
                    <View>购物车</View>
                    <View onTap={handleClearAll}><Icon type="delete" size="30px" />清空</View>
                </View>

                <View className={styles.cart_list}>
                    {renderCartList}
                </View>
            </View>

            <View className={styles.checkout}>
                <View className={styles.checkout_info}>
                    <View className={styles.btn_cart} onTap={(event)=>{
                        setShow(!show)
                    }}>
                        <Icon type="cartfill" size="60px" color="#0099ff" />
                    </View>
                    <View>￥{total}</View>
                </View>
                <View class={styles.btn_chekout} onTap={()=>{ handleCheckOut(checkoutUrl) }}>去下单</View>
            </View>
            <Modal>
                <View></View>
            </Modal>
            
        </View>
    )
}

export default connect(
    //mapStateToProps
    (state, props)=>{

        let total = 0

        state.cartList[props.dinnerType].forEach((item)=>{
            total += item.menu_price*item.menu_quantity
        })

        return{
            ...props,
            cartList: state.cartList[props.dinnerType],
            total
        }
    },
    //mapDispatchToProps
    (dispatch, props)=>{
        return{
            handleChange: (item, value)=>{
                dispatch({
                    type: CART_CHANGE_QTY,
                    menu: item,
                    value: value,
                    dinnerType: props.dinnerType
                })
            },
            handleClearAll: ()=>{
                dispatch({
                    type: CART_CLEAR_ALL,
                    dinnerType: props.dinnerType
                })
            }
        }

    }
)(ShoppingCart)
