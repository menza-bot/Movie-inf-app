import React, { useEffect, useState } from 'react' 
import InfiniteScroll from 'react-infinite-scroll-component'
import { newsAPI } from '../../API'
import { ArticlesType } from '../../types'
import styles from './MainPage.module.css'



const MainPage = () => {

    const category = 'Main Page'

    const [mainNewsContainer, setMainNewsContainer] = useState<ArticlesType[]>([])

    const [currentMainPage, setCurrentMainPage] = useState<number>(1)

    useEffect(() => {
        async function fetchMainNews() {
            let mainNews = await newsAPI.getNews('general', 1)
            setMainNewsContainer((prev: ArticlesType[]) => [...prev, ...mainNews])
        }

        fetchMainNews()
    }, [currentMainPage]) 

    return (
        
        <div className = {styles.content}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div>
                    {
                        mainNewsContainer ? 
                            (<InfiniteScroll dataLength = {mainNewsContainer.length} next = {() => setCurrentMainPage(currentMainPage + 1)} hasMore = {true} loader={<h4>Loading...</h4>}>
                                    {mainNewsContainer.map((item, index) => {
                                        return <div key = {index} className = {styles.newsCard}>
                                            <a href = {item.url} className = {styles.anchor}><div className = {styles.title}>{item.title}</div></a>
                                            <span className={styles.sourceName}>{item.source.name}</span>
                                            <span className={styles.publishedAt}>{item.publishedAt}</span>
                                            <img className = {styles.img} src={item.urlToImage} alt="img"/>
                                            <div className = {styles.describtion}>{item.description}</div>
                                        </div>
                                    })}
                            </InfiniteScroll>) : (null)
                    }
            </div>
        /</div>
    )
}

export default MainPage