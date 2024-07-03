import axios from 'axios'
import {Data, NewsBlock} from "../redux/interface-redux";

const initial = axios.create({
    baseURL: 'https://newsapi.org/v2/everything'
})

interface getItemsType {
    data: {
        status: string,
        totalResults: number,
        articles : Array<NewsBlock>
    },
    status:number,
    statusText:string
}


export const News = {
    getApple(page:number,date:string): Promise<Data>{
        return axios.get<Data, getItemsType>(`https://newsapi.org/v2/everything?pageSize=1&page=${page}&q=tesla&from=${date}&to=${date}&sortBy=popularity&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {
            return response.data})
    },
    getTelsa(page:number,date:string): Promise<Data> {
        return axios.get<Data, getItemsType>(`https://newsapi.org/v2/everything?pageSize=1&page=${page}&q=tesla&from=${date}&to=${date}&sortBy=popularity&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {
            return response.data})
    },
    getBusiness(page:number,date:string): Promise<Data> {
        return axios.get<Data, getItemsType>(`https://newsapi.org/v2/top-headlines?pageSize=1&page=${page}&from=${date}&to=${date}&country=us&category=business&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {
            return response.data})
    },
    getTechCrunch(page:number,date:string): Promise<Data> {
        return axios.get<Data, getItemsType>(`https://newsapi.org/v2/top-headlines?pageSize=1&page=${page}&from=${date}&to=${date}&sources=techcrunch&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {
            return response.data})
    },
    getWallStreet(page:number,date:string) : Promise<Data> {
        return initial.get<Data, getItemsType>(`?pageSize=1&page=${page}&from=${date}&to=${date}&domains=wsj.com&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {
            return response.data})
    }
}