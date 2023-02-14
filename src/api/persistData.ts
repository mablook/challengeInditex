import { getData } from "./fetchApi";

export const getLocalStorage:({url}:{url?:string}) => any = async ({url}) => {
  if (!url) return
    try {
      const item = window.localStorage.getItem(url);
      if(item){
        return JSON.parse(item)
      }else{
        const data = await getData(url)
        setLocalStorage({key:url, value:data})
        return data
      }

    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

export const setLocalStorage:({key, value}:{key:string, value:string}) => any = ({key, value}) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
