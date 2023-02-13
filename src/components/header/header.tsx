import { FC } from "react"
import styles from './Header.module.scss'
interface HeaderProps {
    title:string
}


const Header:FC<HeaderProps> = ({title}) => {
    return(
    <header className={styles.header}>
        <a href="/">{title}</a>
    </header>
    )
}

export default Header
