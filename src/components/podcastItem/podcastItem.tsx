import { FC } from "react";
import { Entry } from "uiTypes";
import styles from './PodcastItem.module.scss'

interface PodcastItemProps {
    entry : Entry
}

const PodcastItem:FC<PodcastItemProps> = ({entry}) => {
    return(
    <li className={styles.container}>
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
