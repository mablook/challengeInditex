import * as React from 'react';
import { Entry, PodcastContextType, PodcastDetails, PodcastDetailsResponse, RootFeed } from 'uiTypes';
import { getData } from '../api/fetchApi';
import { getLocalStorage } from '../api/persistData';


export const PodcastContext = React.createContext<PodcastContextType | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<RootFeed>();
  const [podcastDetail, setPodcastDetail] = React.useState<PodcastDetailsResponse>();

  const getPodcasts = async () => {
    if(!podcasts){
      const data = await getLocalStorage({ url : process.env.REACT_APP_API_BASE_URL })
      await setPodcasts(data as RootFeed)
    }
  }

  const getPodcastDetail = async (id:string) => {
        if(!podcasts){
        await getPodcasts()
        }
        let data:PodcastDetailsResponse = await getLocalStorage({ url :`${process.env.REACT_APP_API_PRODUCT_DETAIL}?id=${id}&media=podcast&entity=podcastEpisode&limit=15` })
        const info:Entry[] = podcasts?.feed.entry.filter(obj => obj.id.attributes["im:id"] === id)!
        data.podcastInfo = info[0]
        await setPodcastDetail(data as PodcastDetailsResponse)
  }

  return <PodcastContext.Provider value={{ podcasts, podcastDetail, getPodcasts, getPodcastDetail, setPodcastDetail }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
