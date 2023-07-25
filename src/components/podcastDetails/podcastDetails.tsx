import React, { FC, useContext, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PodcastContextType, PodcastDetailsData } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import { convertDate, convertTime } from "../../utils/date";
import { cropText } from "../../utils/text";
import LeftDetails from "../leftDetails/leftDetails";
import styles from "./PodcastDetails.module.scss";

const PodcastDetails: FC = () => {
  const navigate = useNavigate();
  const { podcastId } = useParams();
  const { podcastDetail, getPodcastDetail, setLoading } = useContext(PodcastContext) as PodcastContextType;

  const getDetailsInfo = useCallback(async () => {
    if (podcastId) {
      await getPodcastDetail(podcastId);
    }
  }, [getPodcastDetail, podcastId]);

  useEffect(() => {
    if (podcastId && podcastId !== podcastDetail?.podcastInfo.id.attributes?.["im:id"]) {
      getDetailsInfo();
    }
  }, [getDetailsInfo, podcastDetail?.podcastInfo.id.attributes, podcastId]);

  useEffect(() => {
    podcastDetail && setLoading(false);
  }, [podcastDetail, setLoading]);

  const handleClick = (episode: PodcastDetailsData) => {
    setLoading(true);
    navigate(`/podcast/${podcastId}/episode/${episode.trackId}`);
  };

  return (
    <div className={styles.container}>
      <LeftDetails
        podcast={podcastId}
        podcastImage={podcastDetail?.podcastInfo?.["im:image"]?.[2]?.label || ""}
        podcastName={podcastDetail?.podcastInfo?.["im:name"]?.label || ""}
        podcastSummary={podcastDetail?.podcastInfo?.summary?.label || ""}
        poscastArtist={podcastDetail?.podcastInfo?.["im:artist"]?.label || ""}
      />
      <div>
        <div className={[styles.card, styles.episodes].join(" ")}>Episodes: {podcastDetail && podcastDetail.resultCount - 1}</div>
        <ul className={[styles.card, styles.ul].join(" ")}>
          <li key="li-header" className={styles.tr}>
            <div className={styles.tabletitle}>Title</div>
            <div className={styles.tabledate}>Date</div>
            <div className={styles.tableduration}>Duration</div>
          </li>
          {podcastDetail?.results?.slice(1).map((episode) => (
            <li key={episode.trackId} className={styles.tr}>
              <div className={styles.tabletitle}>
                <button
                  className={styles.viewDetails}
                  data-testid="button-episode"
                  onClick={() => handleClick(episode)}
                  title={episode.trackName}
                >
                  {cropText({ text: episode.trackName, size: 40 })}
                </button>
              </div>
              <div className={styles.tabledate}>{convertDate({ date: episode.releaseDate })}</div>
              <div className={styles.tableduration}>{convertTime({ time: episode.trackTimeMillis })}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PodcastDetails;
