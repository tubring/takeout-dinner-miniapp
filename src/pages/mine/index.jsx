import * as React from 'react';
import { Cell } from 'annar';
import { View, Text, Image } from 'remax/one';
import { OpenData, navigateTo } from 'remax/wechat';
import styles from './index.css';

export default () => {

  React.useEffect(()=>{
    
  },[])

  return (
    <View>
      <View className={styles.header}>
        <View className={styles.user_info}>

          <View className={styles.avatar}>
            <OpenData type="userAvatarUrl" ></OpenData>
          </View>
          <View className={styles.nickname}>
            <OpenData type="userNickName" ></OpenData>
          </View>
        </View>
      </View>
      
      <View className="block">
        <Cell label="我的优惠券" arrow icon="redpacket" onTap={()=>navigateTo({url:'/pages/coupon/my'})}></Cell>
        <Cell label="我的订单" arrow icon="news_hot_light" onTap={()=>{navigateTo({url:'/pages/order/index'})}}></Cell>
        <Cell label="收货地址" arrow icon="addressbook" onTap={()=>{navigateTo({url:'/pages/address/index'})}}></Cell>
        <Cell label="关于我们" arrow icon="info" onTap={()=>{navigateTo({url:'/pages/about/index'})}}></Cell>
      </View>
      
    </View>
  );
};
