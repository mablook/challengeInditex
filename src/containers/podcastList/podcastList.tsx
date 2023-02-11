import { FC, useContext, useEffect, useState } from "react"
import { Entry, PodcastContextType } from "uiTypes";
import PodcastItem from "../../components/podcastItem/podcastItem";

import Search from "../../components/search"
import { PodcastContext } from "../../context/podcastContext";
import styles from './PodcastList.module.scss'

const PodcastList:FC = () => {
    const { podcasts, getPodcasts } = useContext(PodcastContext) as PodcastContextType;
    const [list,setList] = useState<Entry[]>()

    useEffect(() => {
        if(!podcasts){
          getPodcasts();
        }else if(podcasts){
          setList(podcasts?.feed.entry)
        }
      },[getPodcasts, podcasts])

    return(
    <div>
        <div>Podcaster</div>
        <ul className={styles.container}>
        <Search />
        {
            list && list.map((entry) => (
                <PodcastItem key={entry.id.label} entry={entry} />
        ))}
        </ul>
    </div>
    )
}

export default PodcastList
