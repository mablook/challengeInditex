import * as React from 'react';
import { useState } from 'react';
import { Entry, PodcastContextType, PodcastDetailsResponse, RootFeed } from 'uiTypes';
import { getLocalStorage } from '../api/persistData';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = useState<RootFeed>();
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetailsResponse>();
  const [loading, setLoading] = useState<boolean>(false)

  const getPodcasts = async () => {
    if(!podcasts){
      const data = await getLocalStorage({ url : process.env.REACT_APP_API_BASE_URL })
      await setPodcasts(data as RootFeed)
    }
  }

  const getPodcastDetail = async (id:string) => {
    try{
      if(!podcasts){
        await getPodcasts()
        }
        let data:PodcastDetailsResponse = await getLocalStorage({ url :`${process.env.REACT_APP_API_PRODUCT_DETAIL}?id=${id}&media=podcast&entity=podcastEpisode&limit=15` })
        const info:Entry[] = podcasts?.feed.entry.filter(obj => obj.id.attributes["im:id"] === id)!
        if(info === undefined) return
        data.podcastInfo = info[0]
        await setPodcastDetail(data as PodcastDetailsResponse)
    }catch(e){
      console.error(e)
      // window.location.href = 'http://localhost:3000/notfound';
      return undefined
    }

  }

  return <PodcastContext.Provider value={{ podcasts, podcastDetail, getPodcasts, getPodcastDetail, setPodcastDetail, loading, setLoading }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
