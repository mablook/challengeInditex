import * as React from 'react';
import { Entry, PodcastContextType, RootFeed } from 'uiTypes';
import { getData } from '../api/fetchApi';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<RootFeed>();
  const [podcastDetail, setPodcastDetail] = React.useState<Entry>();

  const getPodcasts = async () => {
    const local = localStorage.getItem("save-list")
    if(!local && !podcasts){
      const data = await getData(process.env.REACT_APP_API_BASE_URL || '')
      localStorage.setItem("save-list", JSON.stringify(data));
      setPodcasts(data as RootFeed)
    }else if(!podcasts && local){
        setPodcasts(JSON.parse(local))
    }
  }

  const getPodcastDetail = async (id:string) => {
      const data = await getData(process.env.REACT_APP_API_PRODUCT_DETAIL || '')
      if(data){
        setPodcastDetail(data as Entry)
     }
  }

  return <PodcastContext.Provider value={{ podcasts, podcastDetail, getPodcasts, getPodcastDetail }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
