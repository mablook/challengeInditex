import { FC } from "react"
import { useParams } from "react-router-dom";
import { Entry } from "uiTypes"
import styles from './PodcastDetails.module.scss'


const PodcastDetails:FC = () => {
    const { podcastId } = useParams();

    return(
    <div className={styles.container}>
        Details
    </div>
    )
}

export default PodcastDetails
