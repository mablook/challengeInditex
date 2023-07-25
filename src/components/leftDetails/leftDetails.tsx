import { FC, useCallback } from "react";

import { cropText } from "../../utils/text";
import styles from "./LeftDetails.module.scss";
import { useNavigate } from "react-router-dom";

export interface LeftDetailsProps {
  podcastName?: string
  podcastImage?: string
  poscastArtist?: string
  podcastSummary?: string
  podcast?: string
}

const LeftDetails: FC<LeftDetailsProps> = ({ podcastImage, podcastName, podcastSummary, poscastArtist, podcast}) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
      navigate(`/podcast/${podcast}`)
  }, [navigate, podcast])

  return (
    <div className={[styles.card, styles.details].join(" ")}>
    <div data-testid="dataleft-details-card" className={styles.leftDetails} onClick={handleClick}>
      <img alt={podcastName} src={podcastImage} className={styles.img} />
    </div>
    <hr className={styles.solid} />
    <div className={[styles.title, styles.leftDetails].join(" ")} onClick={handleClick}>
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
