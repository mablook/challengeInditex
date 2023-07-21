import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "./DefaultPageContainer.module.scss";

const DefaultPageContainer: FC = () => {
  return (
    <div data-testid="podcast-container">
      <Header title="Podcaster" />
      <hr className={styles.solid}/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultPageContainer;
