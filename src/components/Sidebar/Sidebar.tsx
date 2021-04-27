import React from 'react' 
import styles from './Sidebar.module.css'
import { useHistory } from 'react-router-dom'




const Sidebar = (props: any) => {


    let history = useHistory()


    const handleClick = (category: string) => {
        history.push(`/${category}`)
    }



    return (
        <div className = {styles.sidebar}>
            
            {
                props.categories.map((category: any, index: number) => {

                    return  <div onClick = {() => handleClick(category.category)} className = {styles.category} key = {index}>
                                {category.category}
                            </div>
                    
                })
            }
        </div>
    )
}


export default Sidebar