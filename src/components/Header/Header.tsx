import React from 'react' 
import styles from './Header.module.css'
import { BiNews } from 'react-icons/bi'
import { useHistory } from 'react-router'

const Header = () => {


    let history = useHistory()


    const handleClick = () => {
        history.push(`/`)
    }



    return (
        <div className = {styles.header} onClick = {() => handleClick()}>
            <i className = {styles.icon}><BiNews size = '1.6rem'/></i>
            <h3 className = {styles.title}>News app</h3>
        </div>
    )
}


export default Header