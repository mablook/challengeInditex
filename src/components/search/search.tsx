import { FC } from "react"
import styles from './Search.module.scss'


interface SearchProps {
    value: string
    placeholder: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Search:FC<SearchProps> = ({value,placeholder,onChange}) => {
    return(
    <div className={styles.container}>
        <input type="text" className={styles.input} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
    )
}

export default Search
