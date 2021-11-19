import { useQuery } from 'remax'
import * as React from 'react'
import { View } from 'remax/one'
import HeaderTable from '../../components/Header/table'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import ShoppingCart from '../../components/ShoppingCart'
import styles from './index.css'

export default () => {

  const dinnerType = "dinnerIn"
  const [tables, setTables] = React.useState([]);
  const [table, setTable] = React.useState();

  const query = useQuery()

  React.useEffect(()=>{
    setTable(query.table)

  },[])
  

  return (
    <View className={styles.app}>
      <Banner />
      <HeaderTable table={table} />
      <Menu dinnerType={dinnerType} />
      <ShoppingCart 
        dinnerType={dinnerType} 
        checkoutUrl="/pages/dinner/order"
      />
    </View>
  );
};
