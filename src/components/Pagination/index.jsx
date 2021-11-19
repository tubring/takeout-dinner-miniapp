import { View } from "@remax/one"
import React from "react"
import styles from './index.css'

export default(props)=>{
    
    const { currentPage, totalPage } = props

    const [activeKey, setActiveKey] = React.useState(1)

    const renderList = (total, currentPage = 1)=>{

        let pageShow = 7 //显示7个页码, 多余则省略号显示
        let startPage = 1

        let list = []
        
        if(total <= 10){ //总页数低于8页全部显示
            for (let i = 0; i < total; i++) {
                list.push(
                    <View className={styles.page_no+(currentPage==i+1?' '+styles.active:'')} key={i}>
                        {i+1}
                    </View>
                )
            }
        }else{ //总页数大于10, 部分显示

            //第一页
            list.push(
                <View className={styles.page_no+(currentPage==1?' '+styles.active:'')} key={1}>
                   {1}
                </View>
            )


            //前面省略号(当前页的前两项)
            if(currentPage >= pageShow-2 ){
                console.log(">?")
                list.push(<View className={styles.page_hidden} key={-1}>...</View>)
            }

            //中间5项(当前页前后各显示2项)
            for(let i = currentPage-2; i <= currentPage + 2; i++){
                if(i <= total-1 && i > 1){
                    list.push(<View className={styles.page_no+(currentPage==i?' '+styles.active:'')} key={i}>{i}</View>)
                }
               
            }

            //后面省略号
            if(total - startPage >= pageShow + 1 && currentPage <= total-4 ){
                list.push(<View className={styles.page_hidden} key={-2}>...</View>)
            }

            //最后一项
            list.push(
                <View className={styles.page_no+(currentPage==total?' '+styles.active:'')} key={total}>
                    {total}
                </View>
            )
            
        }
        
        return list
    }

    return (
        <View className={styles.pagination_container}>
            <View className={styles.pages}>
                {totalPage>1?
                    <View className={styles.page_no} onTap={()=>{

                    }}>{'<'}</View>:''
                }

                {renderList(totalPage, currentPage)}

                {totalPage>1?
                    <View className={styles.page_no} onTap={()=>{
                        
                    }}>{'>'}</View>:''
                }
            </View>
        </View>
    )

}