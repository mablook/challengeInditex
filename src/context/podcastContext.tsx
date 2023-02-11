import * as React from 'react';
import { PodcastContextType, RootFeed } from 'uiTypes';
import { getData } from '../api/fetchApi';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<RootFeed>();

  const getPodcasts = async () => {
    const local = localStorage.getItem("save-list")
    if(!local && !podcasts){
      const data:any = await getData('https://itunes.apple.com/us/rss/toppodcasts/limit=20/genre=1310/json')
      localStorage.setItem("save-list", JSON.stringify(data));
      setPodcasts(data as RootFeed)
    }else if(!podcasts && local){
        setPodcasts(JSON.parse(local))
    }
  }

  return <PodcastContext.Provider value={{ podcasts, getPodcasts }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
