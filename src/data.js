export const API_KEY = 'AIzaSyBOwl0z7TKP-HCxgkjs2rTSXXB4ra812PA';

export const valueConverter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if (value >= 1000){
        return Math.floor(value/1000)+"K"
    }else{
        return value
    }

    
}