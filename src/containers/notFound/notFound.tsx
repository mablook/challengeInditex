import { FC } from "react";
import styles from "./NotFound.module.scss";

const NotFound: FC = () => {

  return (
    <div className={styles.container}>
      Not Found
      <a href="/" className={styles.navBack}>back to home</a>
    </div>
  );
};

export default NotFound;
