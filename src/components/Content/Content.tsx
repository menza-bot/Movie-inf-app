import React, { useEffect, useState } from 'react'
import styles from './Content.module.css'
import { useParams } from 'react-router-dom'
import { newsAPI } from '../../API'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ArticlesType } from '../../types'


const Content = () => {

    const [newsContainer, setNewsContainer] = useState<ArticlesType[]>([])

    const [currentPage, setCurrentPage] = useState<number>(1)

    const { category }: any = useParams()




    useEffect(() => {

        async function fetchNews() {
            let news = await newsAPI.getNews(category, currentPage)
            setNewsContainer((prev: ArticlesType[]) => [...prev, ...news])
        }


        fetchNews()

    }, [currentPage, category])


    useEffect(() => {

        setNewsContainer([])
        setCurrentPage(1)

    }, [category])



    return (
        <div className={styles.content}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div>
                {
                    newsContainer?.length ?
                        (<InfiniteScroll dataLength={newsContainer.length} next={() => setCurrentPage(currentPage + 1)} hasMore={true} loader={<h4>Loading...</h4>}>
                            {
                                newsContainer.map((item, index) => {
                                    return <div key={index} className={styles.newsCard}>
                                        <a href={item.url} className={styles.anchor}><div className={styles.title}>{item.title}</div></a>
                                        <span className={styles.sourceName}>{item.source.name}</span>
                                        <span className={styles.publishedAt}>{item.publishedAt}</span>
                                        <img className={styles.img} src={item.urlToImage} alt="img" />
                                        <div className={styles.describtion}>{item.description}</div>
                                    </div>
                                })
                            }
                        </InfiniteScroll>)
                        : (null)
                }
            </div>
        </div>
    )
}


export default Content