import React, { useEffect, useState } from 'react'
import { newsAPI } from '../../API'
import { AdditionalSourcesType } from '../../types'
import styles from './AdditionalBlock.module.css'


const AdditionalBlock = () => {


    const [additionalNewsContainer, setAdditionalNewsContainer] = useState<AdditionalSourcesType[] | null>(null)


    useEffect(() => {
        async function fetchAdditionalNews() {
            const additionalNews = await newsAPI.getAdditionalNews()
            setAdditionalNewsContainer(additionalNews)
        }

        fetchAdditionalNews()
    }, [])


    return (
        <div className={styles.additionalBlock}>
            <h4 className={styles.title}>Beyond the headlines</h4>
            {
                additionalNewsContainer ? additionalNewsContainer.map(item => {
                    return <div className={styles.newsItem} key={item.id}>
                        <a href={item.url} className={styles.anchor}><div className={styles.describtion}>{item.description}</div></a>
                        <div className={styles.name}>{item.name}</div>
                    </div>
                }) : null
            }
        </div>
    )
}


export default AdditionalBlock