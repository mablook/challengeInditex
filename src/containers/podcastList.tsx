import { FC, useContext } from "react"
import { PodcastContextType } from "uiTypes";
import PodcastItem from "../components/podcastItem"
import Search from "../components/search"
import { PodcastContext } from "../context/podcastContext";

const PodcastList:FC = () => {
    const { podcasts, getPodcasts } = useContext(PodcastContext) as PodcastContextType;
    return(
    <div>
        <div>Podcaster</div>
        <Search />
        <PodcastItem />
    </div>
    )
}

export default PodcastList
