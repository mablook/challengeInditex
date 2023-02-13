
 const convertDate:({date}:{date:Date}) => string = ({date}:{date:Date}) => {
    const _date = new Date(date)
    return _date.toLocaleDateString("en-UK")
 }

 const convertTime:({time}:{time:number}) => string = ({time}) => {
    const minutes = `0${new Date(time).getMinutes()}`.slice(-2);
    const seconds = `0${new Date(time).getSeconds()}`.slice(-2);
    return `${minutes}:${seconds}`
 }

 export { convertDate, convertTime }
