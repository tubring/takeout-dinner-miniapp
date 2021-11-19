import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import HeaderAddress from '../../components/Header/address';
import Menu from '../../components/Menu'
import ShoppingCart from '../../components/ShoppingCart';
import store from '../../store';
import { SELECT_ADDRESS } from '../../store/actionTypes'
import styles from './index.css';

export default () => {

  const dinnerType = "takeOut"
  const [address, setAddress] = React.useState()
  const [addressList, setAddressList] = React.useState([
    {id:1,address:'浦西万达广场',phone:'13588889999',name:'丫丫'},
    {id:2,address:'浦东万达广场',phone:'13588889999',name:'John Doe'}
  ])

  React.useEffect(()=>{
    
    setAddress(store.getState().selectedAddress)

  },[])

  React.useEffect(()=>{
    let unsubscribe = store.subscribe(()=>{
      setAddress(store.getState().selectedAddress)
    })
    return ()=>{
      unsubscribe()
    }
  })




  return (
    <View className={styles.app}>
      
      <HeaderAddress address={address} addressList={addressList} />
      <Menu dinnerType={dinnerType} />
      <ShoppingCart
        dinnerType={dinnerType}
        checkoutUrl="/pages/take-out/order"
      />
    </View>
  );
};
