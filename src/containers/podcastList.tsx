import { FC, useContext, useState } from "react"
import { Entry, PodcastContextType } from "uiTypes";
import PodcastItem from "../components/podcastItem"
import Search from "../components/search"
import { PodcastContext } from "../context/podcastContext";

const PodcastList:FC = () => {
    const { podcasts, getPodcasts } = useContext(PodcastContext) as PodcastContextType;
    const [list,setList] = useState<Entry[]>()

    return(
    <div>
        <div>Podcaster</div>
        <Search />
        {
            list && list.map((r) => (
                <img
                  alt='pic'
                  key={r.id.attributes['im:id']}
                  src={r['im:image'][0].label}
              />
        ))}
        <PodcastItem />
    </div>
    )
}

export default PodcastList
