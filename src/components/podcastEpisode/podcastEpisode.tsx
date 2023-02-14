import { FC, useContext, useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Entry, PodcastContextType, PodcastDetails } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import { convertDate, convertTime } from "../../utils/date";
import { cropText } from "../../utils/text";
import LeftDetails from "../leftDetails/leftDetails";
import styles from "./PodcastEpisode.module.scss";

const PodcastEpisode: FC = () => {
  const { podcastId, episodeId } = useParams();
  const { podcastDetail, getPodcastDetail } = useContext(PodcastContext) as PodcastContextType;
  const [episode, setEpisode] = useState<PodcastDetails>();

  console.log("--- the episode", episode);

  const getDetailsInfo = useCallback(async () => {
    podcastId && (await getPodcastDetail(podcastId));
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
  }, [episodeId]);

  return (
    <div className={styles.container}>
      <LeftDetails podcastImage={podcastDetail?.podcastInfo["im:image"][2].label} podcastName={podcastDetail?.podcastInfo["im:name"].label} podcastSummary={podcastDetail?.podcastInfo.summary.label} poscastArtist={podcastDetail?.podcastInfo["im:artist"].label} />

      <div className={[styles.card, styles.details].join(" ")}>
        <div>{episode?.trackName}</div>
        <div>{episode?.description}</div>
        <div>
          <audio controlsList="nodownload" controls>
            <source src={episode?.episodeUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisode;
