import { FC } from "react"
import PodcastItem from "../components/podcastItem"
import Search from "../components/search"

const PodcastList:FC = () => {
    return(
    <div>
        <div>Podcaster</div>
        <Search />
        <PodcastItem />
    </div>
    )
}

export default PodcastList
