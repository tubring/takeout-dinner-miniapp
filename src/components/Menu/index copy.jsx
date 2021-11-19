import * as React from 'react'
import { Tabs, Card, Stepper } from 'annar'
import { Image, View, Button } from '@remax/one'
import { ScrollView } from '@remax/wechat'
import styles from './index.css'
import { connect } from 'react-redux'
import store from '../../store'
import { CART_CHANGE_QTY } from '../../store/actionTypes'


const Menu = (props) =>{

    // const {dinnerType, cartList, handleChangeQty} = props
    const dinnerType = props.dinnerType == "takeOut"?"takeOut":"dinnerIn"
    const [category, setCategory] = React.useState([])
    const [tabActiveKey,setTabActiveKey] = React.useState('0')
    const [menus, setMenus] = React.useState([])
    const [numbers, setNumbers] = React.useState({})

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
                    {menu_id:1,menu_name:'白米饭',image:'/example/dinner1.jpeg',menu_price:39.5},
                    {menu_id:2,menu_name:'腐竹炒肉',image:'/example/dinner2.jpeg',menu_price:39.5},
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
                    {menu_id:5,menu_name:'花生米',image:'/example/dinner3.jpeg',menu_price:39.5,},
                    {menu_id:6,menu_name:'海带结',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            },{
                category_id:3,
                category_name:'主食',
                list:[
                    {menu_id:7,menu_name:'花生米',image:'/example/dinner3.jpeg',menu_price:39.5,},
                    {menu_id:8,menu_name:'海带结',image:'/example/dinner4.jpeg',menu_price:39.5,},
                ]
            }
            
        ])

        //在菜单列表中匹配购物车中的菜单数量
        let cartList = store.getState().cartInfo[dinnerType].list
        let newNumbers = {}
        cartList.forEach((item)=>{
            newNumbers = {
                ...newNumbers,
                [item.menu_id]: item.menu_quantity
            }
        })
        setNumbers(newNumbers)
    },[])

    React.useEffect(()=>{
        let unsubscribe = store.subscribe(()=>{
            let cartList = store.getState().cartInfo[dinnerType].list
            let newNumbers = {}
            cartList.forEach((item)=>{
                newNumbers = {
                    ...newNumbers,
                    [item.menu_id]: item.menu_quantity
                }
            })
            setNumbers(newNumbers)
        })
        return ()=>{
            unsubscribe();
        }
    })

    const renderMenu = menus.map((item)=>{
        return (
            <View key={item.category_id} id={"group-"+item.category_id} className={styles.menu_group}>
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
                                            value={numbers[i.menu_id]}
                                            min={0}
                                            onChange = {(value)=>{
                                                // handleChangeQty(i.men_id,value)
                                                console.log("val:",value)
                                                let newNums = {
                                                    ...numbers,
                                                    [i.menu_id]: value
                                                }
                                                setNumbers(newNums)

                                                store.dispatch({
                                                    type: CART_CHANGE_QTY,
                                                    menu: i,
                                                    value: value,
                                                    dinnerType: dinnerType
                                                })
                                                // handleChangeQty(i,value)
                                                
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
                    <ScrollView scrollIntoView={"group-"+tabActiveKey} scrollY={true} scrollWithAnimation={true}>{renderMenu} </ScrollView>
                </Card>
            </Tabs.TabContent>
        )
    })

    const handleChangeQty = (menu_id,value)=>{

        let newNums = {
            ...numbers,
            [menu_id]: value
        }
        setNumbers(newNums)
        console.log(numbers)
    }
    
    

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

export default Menu

// export default connect(
//     (state, props)=>{
//         return {
//             ...props,
//             cartList: state.cartInfo[props.dinnerType].list
//         }
//     },
//     (dispatch,props)=>{
//         return {
//             handleChangeQty: (item,value)=>{
//                 dispatch({
//                     type: CART_CHANGE_QTY,
//                     menu: item,
//                     value: value,
//                     dinnerType: props.dinnerType
//                 })
//             },
//         }
//     }
// )(MenuUI)