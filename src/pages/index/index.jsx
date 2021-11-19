import * as React from  'react'
import { Image, View, Navigator, navigateTo } from '@remax/one'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Coupon from '../../components/Coupon'
import Comment from '../../components/Comment'
import styles from './index.css'

export default () => {

    const [comments, setComments] = React.useState([])

    React.useEffect(()=>{
        setComments([{review_id:1,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner2.jpeg'}],create_at:'2021-09-10'}])
    },[])


    return (
        <View class={styles.app}>
            <Header />

            <Banner />

            <View className={styles.grid}>
                <View className={styles.grid_item} url="/pages/dinner/index" onTap={()=>{
                    navigateTo({url:'/pages/dinner/index?table=B18'})
                }}>
                    <View className={styles.icon}>
                        <Image src="/icon/dinner.png" className={styles.image} />
                    </View>
                    <View>堂食点餐</View>
                </View>
                <View className={styles.grid_item} onTap={()=>{
                    navigateTo({url:'/pages/take-out/index'})
                }}>
                    <View className={styles.icon}>
                        <Image src="/icon/take-out.png" className={styles.image} />
                    </View>
                    <View>外卖点餐</View>
                </View>
            </View>
            
            
            <View className={styles.block_container}>
                <View className={styles.block_title}>
                    <View>用户点评</View>
                    <View className={styles.more} onTap={()=>{
                        navigateTo({url:'/pages/comment/index'})
                    }}>更多{'>>'}</View>
                </View>
                <Comment comments={comments} />
            </View>

            <View className={styles.block_container}>
                <View className={styles.block_title}>
                    <View>优惠券</View>
                    <View className={styles.more} onTap={()=>{
                        navigateTo({url:'/pages/coupon/index'})
                    }}>更多{'>>'}</View>
                </View>
                <Coupon />
            </View>

        </View>
    )

}