import { FC, useContext, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { PodcastContextType } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import { convertDate, convertTime } from "../../utils/date";
import { cropText } from "../../utils/text";
import LeftDetails from "../leftDetails/leftDetails";
import styles from "./PodcastDetails.module.scss";

const PodcastDetails: FC = () => {
  const { podcastId } = useParams();
  const { podcastDetail, getPodcastDetail } = useContext(PodcastContext) as PodcastContextType;

  console.log('--- podcast details --', podcastDetail)

  const getDetailsInfo = useCallback(async () => {
    podcastId && (await getPodcastDetail(podcastId));
  }, [getPodcastDetail, podcastId]);

  useEffect(() => {
    if (podcastId && podcastId !== podcastDetail?.podcastInfo.id.attributes["im:id"]) {
      getDetailsInfo();
    }
  }, [getDetailsInfo, podcastDetail?.podcastInfo.id.attributes, podcastId]);

  return (
    <div className={styles.container}>
      <LeftDetails podcastImage={podcastDetail?.podcastInfo["im:image"][2].label} podcastName={podcastDetail?.podcastInfo["im:name"].label} podcastSummary={podcastDetail?.podcastInfo.summary.label} poscastArtist={podcastDetail?.podcastInfo["im:artist"].label} />

      <div>
        <div className={[styles.card, styles.episodes].join(" ")}>Episodes: {podcastDetail?.resultCount}</div>
        <ul className={[styles.card, styles.ul].join(" ")}>
          <li key="li-header" className={styles.tr}>
            <div className={styles.tabletitle}>Title</div>
            <div className={styles.tabledate}>Date</div>
            <div className={styles.tableduration}>Duration</div>
          </li>
          {podcastDetail &&
            podcastDetail.results.map((results) => {
              return (
                <li key={results.trackId} className={styles.tr}>
                  <div className={styles.tabletitle}>
                    <Link to={`/podcast/${podcastDetail?.podcastInfo.id.attributes["im:id"]}/episode/${results.trackId}`} title={results.trackName}>
                      {cropText({ text: results.trackName, size: 50 })}
                    </Link>
                  </div>
                  <div className={styles.tabledate}>{convertDate({ date: results.releaseDate })}</div>
                  <div className={styles.tableduration}>{convertTime({ time: results.trackTimeMillis })}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default PodcastDetails;
