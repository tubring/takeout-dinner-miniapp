import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import { Button, Cell } from 'annar'
import styles from './index.css';
import { useQuery } from 'remax';

export default () => {

  const query = useQuery()
  const [address, setAddress] = React.useState({})

  React.useEffect(()=>{
    if(query.id){
        setAddress({id:1,address_1:'浦西万达广场',name:'李白',telephone:'13588889999'})  
    }
  },[])


  return (
    <View className="block">
        <Cell.Input
            label="联系人"
            placeholder="姓名"
            value={address.name}
            onTap={()=>setAddress({...address,name:'John Doe'})}
        />
        <Cell.Input
            label="手机号"
            placeholder="手机号"
            value={address.telephone}
            onTap={()=>setAddress({...address,telephone:'13588889999'})}
        />
        <Cell.Input
            label="地址"
            placeholder="地址"
            value={address.address_1}
            onTap={()=>setAddress({...address,address_1:'Rm1806, Sunshine Manhatton, Citong Road, Quanzhou City'})}
        />
        <View className={styles.btn_save}>
            <Button size="large" shape="square" block >保存地址</Button>
        </View>
    </View>
  );
};
