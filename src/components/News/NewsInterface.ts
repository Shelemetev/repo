import {NewsBlock} from "../../redux/interface-redux";

export interface NewsInterface {
    date:string,
    dataNews:NewsBlock,
    search: boolean,
    page: number,
    statusSearch: boolean,
    searchedNews:string
}