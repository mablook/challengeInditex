
const cropText:({text, size}:{text?:string, size:number}) => string = ({text, size}) => {
    if(text && text.length > size){
        return `${text.slice(0, size)}...`
    }else if(text){
        return text
    }else{
        return ''
    }

}

export { cropText }
