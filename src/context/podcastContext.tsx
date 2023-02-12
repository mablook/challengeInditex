import * as React from 'react';
import { PodcastContextType, PodcastDetails, RootFeed } from 'uiTypes';
import { getData } from '../api/fetchApi';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<RootFeed>();
  const [podcastDetail, setPodcastDetail] = React.useState<PodcastDetails[]>();

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
      const data = await getData(`${process.env.REACT_APP_API_PRODUCT_DETAIL}?id=${id}&media=podcast&entity=podcastEpisode&limit=100`)
      if(data){
        setPodcastDetail(data as PodcastDetails[])
     }
  }

  return <PodcastContext.Provider value={{ podcasts, podcastDetail, getPodcasts, getPodcastDetail }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
