import * as React from 'react';


export const PodcastContext = React.createContext<any | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [podcasts, setPodcasts] = React.useState<any>();

  const getPodcasts = async (todo:any) => {
    const local = localStorage.getItem("name-test")
    if(!local && !todo){
      const data = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=20/genre=1310/json')
      setPodcasts(data as any)
    }else if(!todo && local){
        setPodcasts(JSON.parse(local))
    }
  }

  return <PodcastContext.Provider value={{ podcasts, getPodcasts }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
