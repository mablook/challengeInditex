import { FC, useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Entry, PodcastContextType } from "uiTypes"
import { PodcastContext } from "../../context/podcastContext";
import styles from './PodcastDetails.module.scss'


const PodcastDetails:FC = () => {
    const { podcastId } = useParams();
    const { podcastDetail, getPodcastDetail } = useContext(PodcastContext) as PodcastContextType;

    useEffect(() => {
        if(podcastId){
            getPodcastDetail(podcastId)
        }
    },[podcastId])

    return(
    <div className={styles.container}>
        Details
    </div>
    )
}

export default PodcastDetails
