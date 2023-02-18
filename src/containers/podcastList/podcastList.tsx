import { FC, useContext, useEffect, useState } from "react";
import { Entry, PodcastContextType } from "uiTypes";
import PodcastItem from "../../components/podcastItem/podcastItem";
import Search from "../../components/search/search";

import { PodcastContext } from "../../context/podcastContext";
import styles from "./PodcastList.module.scss";

const PodcastList: FC = () => {
  const { podcasts, getPodcasts, setLoading } = useContext(PodcastContext) as PodcastContextType;
  const [list, setList] = useState<Entry[]>();
  const [total,setTotal] = useState<number>()
  const [search, setSearch] = useState<string>("");


  useEffect(() => {
    if (!podcasts) {
      setLoading(true)
      getPodcasts();
    } else if (podcasts) {
      setList(podcasts?.feed.entry);
      setLoading(false)
    }
  }, [getPodcasts, podcasts, setLoading]);

  useEffect(() => {
    if (podcasts && search) {
      const _result = podcasts.feed.entry.filter((obj) => obj["im:artist"].label.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || obj["im:name"].label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      setTotal(_result.length)
      setList(_result);
    } else {
      setTotal(podcasts?.feed.entry.length)
      setList(podcasts?.feed.entry);
    }
  }, [search, podcasts]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className={styles.searchContainer}><span className={styles.count}>{total}</span><Search value={search} onChange={onChange} placeholder="Filter podcasts..." /></div>
      <ul className={styles.container}>{list && list.map((entry) => <PodcastItem key={entry.id.label} entry={entry} />)}</ul>
    </div>
  );
};

export default PodcastList;
