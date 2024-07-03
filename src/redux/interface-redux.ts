 export interface NewsBlock {
    author: string,
    content : string,
    description: string,
    publishedAt: string,
    source: {id: string, name: string},
    title: string,
    url : string,
    urlToImage: string
}
export interface Data {
    status: string,
    totalResults: number,
    articles: Array<NewsBlock>
}
 export interface MainState {
    dataNews: {
        author: string,
        content : string,
        description: string,
        publishedAt: string,
        source: {id: string, name: string},
        title: string,
        url : string,
        urlToImage: string
    },
    date: string,
    page: number,
    totalPage: number,
    statusSearch:boolean,
    searchedNews : string
}