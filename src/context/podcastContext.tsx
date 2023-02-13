import * as React from 'react';
import { Entry, PodcastContextType, PodcastDetails, PodcastDetailsResponse, RootFeed } from 'uiTypes';
import { getData } from '../api/fetchApi';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<RootFeed>();
  const [podcastDetail, setPodcastDetail] = React.useState<PodcastDetailsResponse>();
  const local = localStorage.getItem("save-list")

  const getPodcasts = async () => {
    if(!local && !podcasts){
      const data = await getData(process.env.REACT_APP_API_BASE_URL || '')
      localStorage.setItem("save-list", JSON.stringify(data));
      await setPodcasts(data as RootFeed)
    }else if(!podcasts && local){
       await setPodcasts(JSON.parse(local))
    }
  }
  const getPodcastDetail = async (id:string) => {
      let data:PodcastDetailsResponse = await getData(`${process.env.REACT_APP_API_PRODUCT_DETAIL}?id=${id}&media=podcast&entity=podcastEpisode&limit=15`)
      if(data && local){
        const info:Entry[] = (JSON.parse(local) as RootFeed).feed.entry.filter(obj => obj.id.attributes["im:id"] === id)!
        data.podcastInfo = info[0]
        await setPodcastDetail(data as PodcastDetailsResponse)
     }else if(!local && !podcasts){
        await getPodcasts()
     }
  }

  return <PodcastContext.Provider value={{ podcasts, podcastDetail, getPodcasts, getPodcastDetail, setPodcastDetail }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
