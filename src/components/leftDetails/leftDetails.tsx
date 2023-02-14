import { FC } from "react";

import { cropText } from "../../utils/text";
import styles from "./LeftDetails.module.scss";

interface LeftDetailsProps {
  podcastName?: string
  podcastImage?: string
  poscastArtist?: string
  podcastSummary?: string
}

const LeftDetails: FC<LeftDetailsProps> = ({ podcastImage, podcastName, podcastSummary, poscastArtist}) => {
  return (
    <div className={[styles.card, styles.details].join(" ")}>
    <div>
      <img alt={podcastName} src={podcastImage} className={styles.img} />
    </div>
    <hr className={styles.solid} />
    <div className={styles.title}>
      {cropText({ text : podcastName, size: 30 })}
      <div>by {poscastArtist}</div>
    </div>
    <hr className={styles.solid} />
    <div className={styles.description}>
      Description:
      <div>{ cropText({ text : podcastSummary, size: 100 })}</div>
      </div>
  </div>
  );
};

export default LeftDetails;
