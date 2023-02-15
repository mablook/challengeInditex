import { getData } from "./fetchApi";

const invalidateTime = process.env.REACT_APP_API_INVALIDATE || '3600000'

export const getLocalStorage:({url}:{url?:string}) => any = async ({url}) => {
  if (!url) return
    try {
      const item:any = window.localStorage.getItem(url);
      const expiration = Date.now() - Number(invalidateTime);
      if(item && item.validate < expiration ){
        return JSON.parse(item)
      }else{
        const data = await getData(url)
        data.validate = Date.now();
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
