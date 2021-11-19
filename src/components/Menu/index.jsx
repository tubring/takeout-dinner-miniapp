import * as React from 'react'
import { Tabs, Card, Stepper } from 'annar'
import { Image, View, Button } from '@remax/one'
import { ScrollView } from '@remax/wechat'
import styles from './index.css'
import { connect } from 'react-redux'
import { CART_CHANGE_QTY } from '../../store/actionTypes'


const MenuUI = (props) =>{

    const {dinnerType, menusNumbers, handleChangeQty} = props
    // const dinnerType = props.dinnerType == "takeOut"?"takeOut":"dinnerIn"
    const [category, setCategory] = React.useState([])
    const [tabActiveKey,setTabActiveKey] = React.useState('0')
    const [menus, setMenus] = React.useState([])

    React.useEffect(()=>{
        setCategory([
            {id:0,name:'热门'},
            {id:1,name:'小菜'},
            {id:2,name:'招牌'},
            {id:3,name:'主食'},
            {id:4,name:'甜点'},
            {id:5,name:'饮品'},
        ])
        setMenus([
            {
                category_id:0,
                category_name:'热门',
                list:[
                    {menu_id:1,menu_name:'红烧肥肠',image:'/example/dinner1.jpeg',menu_price:39.5},
                    {menu_id:2,menu_name:'黄金醋肉',image:'/example/dinner2.jpeg',menu_price:39.5},
                ]
            },
            {
                category_id:1,
                category_name:'小菜冷盘',
                list:[
                    {menu_id:3,menu_name:'花生米',image:'/example/dinner3.jpeg',menu_price:39.5,},
                    {menu_id:4,menu_name:'海带结',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            },
            {
                category_id:2,
                category_name:'招牌',
                list:[
                    {menu_id:5,menu_name:'提拉米苏',image:'/example/dinner3.jpeg',menu_price:39.5,},
                    {menu_id:6,menu_name:'海带结',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            },{
                category_id:3,
                category_name:'主食',
                list:[
                    {menu_id:7,menu_name:'黄金蛋炒饭',image:'/example/dinner5.jpeg',menu_price:39.5,},
                    {menu_id:8,menu_name:'海带结',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            },{
                category_id:4,
                category_name:'甜点',
                list:[
                    {menu_id:9,menu_name:'提拉米苏',image:'/example/dinner3.jpeg',menu_price:39.5,},
                    {menu_id:10,menu_name:'印度飞饼',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            },{
                category_id:5,
                category_name:'饮料',
                list:[
                    {menu_id:11,menu_name:'可口可乐',image:'/example/dinner5.jpeg',menu_price:39.5,},
                    {menu_id:12,menu_name:'鲜榨果汁',image:'/example/dinner3.jpeg',menu_price:39.5,},
                ]
            }
            
        ])

        
    },[])

    const renderMenu = menus.map((item)=>{
        return (
            <View key={item.category_id} id={"group_"+item.category_id} className={styles.menu_group}>
                <View className={styles.group_name}>{item.category_name}</View>
                {
                    item.list.map((i)=>{
                        return (
                            <View key={i.menu_id} className={styles.menu_item}>
                                <View className={styles.menu_image}>
                                    <Image className={styles.menu_image} src={i.image} />
                                </View>
                                <View className={styles.menu_info}>
                                    <View className={styles.menu_name}>{i.menu_name}</View>
                                    <View className={styles.menu_detail}>
                                        <View>{i.menu_price}</View>
                                        <Stepper 
                                            bgColor="#FFc409"
                                            shape="circle"
                                            plain
                                            value={menusNumbers[i.menu_id]}
                                            min={0}
                                            onChange = {(value)=>{

                                                handleChangeQty(i,value)
                                                
                                            }} 
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                        
                    })
                }
            </View>

        )
        
    })

    const renderCategory = category.map((item)=>{
        return (
            <Tabs.TabContent key={item.id} tab={item.name}>
                <Card>
                    <ScrollView className={styles.scroll_view} scrollIntoView={"group_"+tabActiveKey} scrollY={true} scrollWithAnimation={true}>{renderMenu} </ScrollView>
                </Card>
            </Tabs.TabContent>
        )
    })

    return (
        <View className={styles.menus}>
            <Tabs 
                onTabClick={({ key }) => setTabActiveKey(key)}
                activeKey={tabActiveKey}
                direction="vertical"
            >
                {renderCategory}

            </Tabs>
        </View>
    )
}

export default connect(
    (state, props)=>{
        let menusNumbers = {}
        state.cartInfo[props.dinnerType].list.forEach((item)=>{
            menusNumbers = {
                ...menusNumbers,
                [item.menu_id]: item.menu_quantity
            }
        })

        return {
            ...props,
            menusNumbers: menusNumbers
        }
    },
    (dispatch,props)=>{
        return {
            handleChangeQty: (item,value)=>{
                dispatch({
                    type: CART_CHANGE_QTY,
                    menu: item,
                    value: value,
                    dinnerType: props.dinnerType
                })
            },
            setMenusNumbers: ()=>{
                
            }
        }
    }
)(MenuUI)