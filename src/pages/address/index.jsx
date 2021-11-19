import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import { Button, Icon } from 'annar'
import styles from './index.css';
import { navigateTo } from '@remax/wechat';

export default () => {

  const [addressList, setAddressList] = React.useState([])

  React.useEffect(()=>{
    setAddressList([
      {id:1,address_1:'浦西万达广场',name:'李白',telephone:'13588889999'},
      {id:2,address_1:'浦西万达广场',name:'李白',telephone:'13588889999'},
    ])
  },[])

  const renderList = addressList.map((item)=>{
    return(
      <View className={styles.address_list} key={item.id}>
        <View className={styles.icon}>
          <Icon type="locationfill" size="72px" />
        </View>
        <View className={styles.info}>
          <View>{item.address_1}</View>
          <View>{item.name}-{item.telephone}</View>
        </View>
        <View className={styles.icon} onTap={()=>{
          navigateTo({url:'/pages/address/edit?id=1'})
        }}>
          <Icon type="edit" size="72px" />
        </View>
        
      </View>
    )
  })

  


  return (
    <View className={"block " + styles.address_container}>
      
      {renderList}

      <View className={styles.btn_add}>
          <Button size="large" shape="square" block onTap={()=>{
            navigateTo({url:'/pages/address/edit'})
          }}>新增收货地址</Button>
        </View>
    </View>
  );
};
