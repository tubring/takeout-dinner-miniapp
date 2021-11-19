import * as React from 'react';
import { View, Image } from 'remax/one';
import { Swiper } from 'annar';
import styles from './index.css'

export default () => {

    // const [banners, setBanners] = React.useState([]) 
    const banners = [
        {banner_id:1,src:'/example/banner.jpg'},
        {banner_id:2,src:'/example/banner1.jpg'},
    ]

    React.useEffect(()=>{
        
    },[])

    const renderItem = banners.map((item)=>{
        return (
            <Swiper.Item key={item.banner_id} className={styles.banner_item}>
                <Image className={styles.banner_image} src={item.src} />
            </Swiper.Item>
        )
    })

    return (
        <View className={styles.banners}> 
            <Swiper autoplay>
                {renderItem}
            </Swiper>
        </View>
    )
}