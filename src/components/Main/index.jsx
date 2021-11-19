import * as React from 'react'
import { Tabs, Card } from 'annar'
import { View } from '@remax/one'
import Banner from '../Banner'
import Menu from '../Menu'
import Comment from '../Comment'
import About from '../About'
import styles from './index.css'

export default() =>{

    const tabs = [
        {
            key:'0',
            title:'点餐',
            content:(
                <View>
                    {/* <Banner/> */}
                    <Menu />
                </View>
            )
        },
        {key:'1',title:'评价',content:<Comment /> },
        {key:'2',title:'商家',content: <About /> },
    ]

    const [tabActiveKey,setTabActiveKey] = React.useState('0')

    React.useEffect(()=>{
    },[])

    const tabsRender = tabs.map((item,index)=>{
        return (
            <Tabs.TabContent key={index} tab={item.title}>
                <Card>
                    <View>{item.content}</View>
                </Card>
            </Tabs.TabContent>
        )
    })
    

    return (
        <View className={styles.menus}>
            <Tabs 
                type="plain"
                onTabClick={({ key }) => setTabActiveKey(key)}
                activeKey={tabActiveKey}
            >
                {tabsRender}
            </Tabs>
        </View>
    )
}