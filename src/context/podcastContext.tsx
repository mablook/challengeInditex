import * as React from 'react';


export const PodcastContext = React.createContext<any | null>(null);

interface Props {
    children: React.ReactNode;
  }

const PodcastProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = React.useState<any>();

  const getTodo = async (todo:any) => {
    const local = localStorage.getItem("name-test")
    if(!local && !todo){
      const data = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=20/genre=1310/json')
      setTodos(data as any)
    }else if(!todo && local){
      setTodos(JSON.parse(local))
    }
  }

  return <PodcastContext.Provider value={{ todos, getTodo }}>{children}</PodcastContext.Provider>;
};

export default PodcastProvider;
