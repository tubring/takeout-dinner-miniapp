import React from "react"
import { View } from "@remax/one"
import Comment from "../../components/Comment"
import Pagination from "../../components/Pagination"
import styles from './index.css'

export default (props)=>{

    const [comments, setComments] = React.useState([])

    React.useEffect(()=>{
        setComments([
            {review_id:1,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner2.jpeg'}],create_at:'2021-09-10'},
            {review_id:2,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner3.jpeg'}],create_at:'2021-09-10'},
            {review_id:3,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner4.jpeg'}],create_at:'2021-09-10'},
            {review_id:4,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner2.jpeg'}],create_at:'2021-09-10'},
            {review_id:5,customer:{nickname:'John Doe',avatar:'/example/logo2.jpg'},review_text:'美味佳肴',rate:4.5,images:[{src:'/example/dinner1.jpeg'},{src:'/example/dinner2.jpeg'}],create_at:'2021-09-10'},
        ])
    },[])


    return (
        <View className={styles.container}>
            <Comment comments={comments} />
            <Pagination currentPage={4} totalPage={50} />
        </View>
    )

}