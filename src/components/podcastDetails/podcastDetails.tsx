import { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Entry, PodcastContextType } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import { convertDate, convertTime } from "../../utils/date";
import styles from "./PodcastDetails.module.scss";

const PodcastDetails: FC = () => {
  const { podcastId } = useParams();
  const { podcastDetail, getPodcastDetail } = useContext(PodcastContext) as PodcastContextType;

  useEffect(() => {
    if (podcastId) {
      getPodcastDetail(podcastId);
    }
  }, [podcastId]);

  return (
    <div className={styles.container}>
      <div className={[styles.card, styles.details].join(" ")}>
        <div>
          <img alt={podcastDetail?.results[0].artistName} src={podcastDetail?.results[0].artworkUrl100} className={styles.img} />
        </div>
        <hr className={styles.solid} />
        <div className={styles.title}>
          {podcastDetail?.results[0].collectionName}
          <div>by {podcastDetail?.results[0].artistName}</div>
        </div>
        <hr className={styles.solid} />
        <div>{podcastDetail?.results[0].shortDescription}
        description description description rtyryrty rt rty rt</div>
      </div>
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
                  <div className={styles.tabletitle}><a href="#">{results.trackName}</a></div>
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
