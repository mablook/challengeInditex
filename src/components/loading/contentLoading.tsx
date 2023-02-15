import { FC, useContext } from "react"
import { PodcastContextType } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import styles from './ContenLoading.module.scss'

const ContentLoading:FC = () => {
    const { loading } = useContext(PodcastContext) as PodcastContextType;

    const _loading = [styles.loading, loading ? styles.startLoading : '']

    return(<div className={_loading.join(" ")}><div></div><div></div><div></div></div>)
}

export default ContentLoading;
