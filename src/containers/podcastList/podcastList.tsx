import { FC, useContext, useEffect, useState } from "react"
import { Entry, PodcastContextType } from "uiTypes";
import PodcastItem from "../../components/podcastItem/podcastItem";
import Search from "../../components/search/search";

import { PodcastContext } from "../../context/podcastContext";
import styles from './PodcastList.module.scss'

const PodcastList:FC = () => {
    const { podcasts, getPodcasts } = useContext(PodcastContext) as PodcastContextType;
    const [list,setList] = useState<Entry[]>()
    const [search,setSearch] = useState<string>("")

    useEffect(() => {
        if(!podcasts){
          getPodcasts();
        }else if(podcasts){
          setList(podcasts?.feed.entry)
        }
      },[getPodcasts, podcasts])

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

    return(
    <div>
        <Search value={search} onChange={onChange} placeholder="Filter podcasts..."/>
        <ul className={styles.container}>
        {
            list && list.map((entry) => (
                <PodcastItem key={entry.id.label} entry={entry} />
        ))}
        </ul>
    </div>
    )
}

export default PodcastList
