import * as React from 'react'
import { Rate } from 'annar'
import { Image, View } from '@remax/one'
import styles from './index.css'

export default (props) => {

    const comments = props.comments

    const renderComment = comments.map((comment)=>{
        return(
            <View className={styles.comment_list} key={comment.review_id}>
                <View>
                    <View className={styles.avatar}>
                        <Image src={comment.customer.avatar} />
                    </View>
                </View>
                
                <View className={styles.content}>
                    <View className={styles.content_header}>
                        <View className={styles.user_title}>
                            <View>{comment.customer.nickname}</View>
                            <View className>{comment.create_at}</View>
                        </View>
                        <Rate size="30px" value={comment.rate} readonly />
                    </View>
                    
                    <View className={styles.content_body}>
                        <View>{comment.review_text}</View>
                        <View className={styles.image_list}>
                        {
                            comment.images.map((image,index)=>{
                                return (
                                    <View class={styles.review_image} key={index}>
                                        <Image src={image.src} />
                                    </View>
                                )
                            })
                        }
                        </View>
                    </View>
                </View>
            </View>
        )
    })

    return (
        <View className={styles.comments}>{renderComment}</View>
    )
}