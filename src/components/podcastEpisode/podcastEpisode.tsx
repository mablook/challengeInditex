import { FC, useContext, useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { PodcastContextType, PodcastDetailsData } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import LeftDetails from "../leftDetails/leftDetails";
import styles from "./PodcastEpisode.module.scss";

const PodcastEpisode: FC = () => {
  const { podcastId, episodeId } = useParams();
  const { podcastDetail, getPodcastDetail, setLoading } = useContext(PodcastContext) as PodcastContextType;
  const [episode, setEpisode] = useState<PodcastDetailsData>();

  const getDetailsInfo = useCallback(async () => {
    if(podcastId){
      await getPodcastDetail(podcastId)
    }
  }, [getPodcastDetail, podcastId]);

  useEffect(() => {
    if (podcastId && podcastId !== podcastDetail?.podcastInfo.id.attributes["im:id"]) {
      getDetailsInfo();
    }
  }, [getDetailsInfo, podcastDetail?.podcastInfo.id.attributes, podcastId]);

  useEffect(() => {
    if (podcastDetail && episodeId) {
      const episode = podcastDetail.results.filter((e) => e.trackId === Number(episodeId));
      setEpisode(episode[0]);
    }
  }, [episodeId, podcastDetail, setEpisode, setLoading]);

  const hendleAudioLoaded = () => {
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <LeftDetails podcastImage={podcastDetail?.podcastInfo["im:image"][2].label} podcastName={podcastDetail?.podcastInfo["im:name"].label} podcastSummary={podcastDetail?.podcastInfo.summary.label} poscastArtist={podcastDetail?.podcastInfo["im:artist"].label} />

      <div className={[styles.card, styles.details].join(" ")}>
        <div className={styles.episodeTitle}>{episode?.trackName}</div>
        <div className={styles.episodeDescription}>{episode?.description}</div>
        <div className={styles.episodeAudio}>
          <audio controlsList="nodownload" data-testid="audio-player" controls onCanPlay={hendleAudioLoaded}>
          { episode?.episodeUrl && <source src={episode?.episodeUrl} type="audio/mp3" /> }
          </audio>
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisode;
