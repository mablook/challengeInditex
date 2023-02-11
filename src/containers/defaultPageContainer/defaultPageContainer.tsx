import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./DefaultPageContainer.module.scss";

const DefaultPageContainer: FC = () => {
  return (
    <div>
      <header className={styles.header}>Podcaster</header>
      <hr className={styles.solid}/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultPageContainer;
