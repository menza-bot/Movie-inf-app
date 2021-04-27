import axios from 'axios'
import { additionalNewsType, newsType } from './types'



const key: string = '2f65cef8646442c2a47e550174d5681e'


export const newsAPI = {


    getNews(category: string, page: number): Promise<any> {
        return axios.get<newsType>(`https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&pageSize=8&country=us&apiKey=${key}`)
            .then(response => {
                return response.data.articles
            })
    },

    getAdditionalNews() {
        return axios.get<additionalNewsType>(`https://newsapi.org/v2/sources?apiKey=${key}&country=us&category=general`)
            .then(response => {
                return response.data.sources
            })
    }






}

