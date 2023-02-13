import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Entry } from "uiTypes";
import styles from './PodcastItem.module.scss'

interface PodcastItemProps {
    entry : Entry
}

const PodcastItem:FC<PodcastItemProps> = ({entry}) => {
    let navigate = useNavigate();

    const handleItemClick = ({link}:{link:string}) => {
        navigate(`/podcast/${link}`)
    }

    return(
    <li className={styles.container} onClick={() => {
        handleItemClick({ link: entry.id.attributes["im:id"] })
    }}>
        <div className={styles.imageContainer}>
        <img
        alt='pic'
        key={entry.id.attributes['im:id']}
        src={entry['im:image'][0].label}
        className={styles.img}
    />
    </div>
    <div className={styles.cardBodyContainer}>
    <div className={styles.title}>{entry["im:name"].label}</div>
    <div>Author: {entry["im:artist"].label}</div>
    </div>
    </li>
    )
}

export default PodcastItem;
