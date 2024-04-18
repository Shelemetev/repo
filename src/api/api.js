import axios from 'axios'

const initial = axios.create({
    baseURL: 'https://newsapi.org/v2/everything'
})

export const News = {
    getApple(date) {
        return initial.get(`?q=apple&from=${date}&to=${date}&sortBy=popularity&apiKey=dde83433c5194172bfdeea59fd79fa83`).then(response => {return response.data})
    }
}