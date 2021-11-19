import * as React from 'react';
import { View, Text, Image, navigateTo } from 'remax/one';
import { Tabs, Card, Button } from 'annar'
import styles from './index.css';

export default () => {

  const orderTypes = [
    {key:1,code:'onsite',title:"堂食",content:'堂食组件'},
    {key:2,code:'delivery',title:"外卖",content:'外卖订单组件'},
    {key:3,code:'collection',title:"自提",content:'组件'},
  ];

  const orderStatus = [
    {id:1,status:'全部'},
    {id:2,status:'待付款'},
    {id:3,status:'待收取'},
    {id:4,status:'已完成'},
    {id:5,status:'已取消'}
  ]

  const [status, setStatus] = React.useState(1)

  const [type,setType] = React.useState(1)

  const [orders, setOrders] = React.useState([])

  React.useEffect(()=>{

    setOrders([
      {id:1,order_no:'20210925K001',menu_list:[{id:1,image:'/example/dinner1.jpeg',number:2},{id:2,image:'/example/dinner2.jpeg',number:2}],created_at:'2021-09-25',status:'未付款',number:3,total_amount:25},
      {id:2,order_no:'20210925K001',menu_list:[{id:1,image:'/example/dinner2.jpeg',number:2}],created_at:'2021-09-25',status:'未付款',number:3,total_amount:25},
    ])

  },[])

  const renderOrder = orders.map((item)=>{

    return(
      <View className={styles.order_item} key={item.id}>
        <View className={styles.order_title}>
          <View onTap={()=>{
            let url = '/pages/order/detail'
            url += '?order_no=' + item.order_no
            navigateTo({url:url})
          }}>订单号:{item.order_no}</View>
          <View>{item.status}</View>
        </View>
        <View className={styles.order_detail}>
          <View className={styles.menu_list}>
            {
              item.menu_list.map(i=>{
                return(
                  <View className={styles.menu_item} key={i.id}>
                    <Image src={i.image} />
                    <View>x {i.number}</View>
                  </View>
                )
              })
            }
          </View>
          <View className={styles.order_info}>共{item.number}件,合计:<Text className={styles.amount}> ￥{item.total_amount}</Text></View>

        </View>
        <View className={styles.btn_group}>
          <View className={styles.btn_item}>
            <Button plain type="primary">取消订单</Button>
          </View>
          <View className={styles.btn_item}>
            <Button look="orange">立即付款</Button>
          </View>
        </View>

      </View>
    )

  })

  const renderStatus = orderStatus.map((item)=>{

    return (
      <Tabs.TabContent key={item.id} tab={item.status}>
        <Card>
          <View>{renderOrder}</View>
        </Card>
      </Tabs.TabContent>
    )

  })

  const renderTypes = orderTypes.map((item)=>{
    
    return(
      <Tabs.TabContent key={item.key} tab={item.title}>
        <Card>
          <Tabs type="plain" activeKey={status} onTabClick={({key})=>{
            console.log(key)
            setStatus(key)
          }}>
            {renderStatus}
          </Tabs>
        </Card>
      </Tabs.TabContent>
    )

  })


  return (
    <View className={styles.order_container}> 
      <Tabs type="card" activeKey={type} onTabClick={({key})=>{
        console.log(key)
        setType(key)
      }}>
        {renderTypes}
      </Tabs>
    </View>
  );
};
