import { connect } from "react-redux"
import News from './News.tsx';
import {
    getDataNews,
    getDateSelector,
    getSearchedNews,
    getStatusSearch
} from '../../redux/redux-selectors/main-selector.ts';
import {
    nextPage,
    prevPage,
    addAppleNews,
    stopSearch,
    addTeslaNews,
    addBusinessNews, addTechCrunchNews, addWallStreetNews
} from './../../redux/main-reducer.ts';
import { compose } from "redux";
import { stopLoader } from "../../redux/loader-reducer.ts";
import { getSearch } from "../../redux/redux-selectors/loader-selector.ts";
import { getPage } from '../../redux/redux-selectors/main-selector.ts';
import { startLoader } from '../../redux/loader-reducer.ts';
import {Data, NewsBlock} from "../../redux/interface-redux";
import {NewsInterface} from "./NewsInterface";
import {AppStateType} from "../../redux/store";

type MapStateToPropsType = {
    date: string,
    dataNews: NewsBlock,
    search: boolean,
    page: number,
    searchedNews:string
}

type MapStateToDispatchType = {
    nextPage : () => void,
    prevPage : () => void,
    stopLoader : () => void,
    // addAppleNews : (page:number,date:string) => Data,
    startLoader : () => void,
    // addTeslaNews : (page: number, date: string) => Data,
    // addBusinessNews : (page:number,date:string) => Data,
    // addTechCrunchNews : (page:number,date:string) => Data,
    // addWallStreetNews : (page:number,date:string) => Data
}
const mapStateToProps = (state : AppStateType) :MapStateToPropsType   => {
    return {
        date: getDateSelector(state),
        dataNews: getDataNews(state),
        search: getSearch(state),
        page: getPage(state),
        searchedNews:getSearchedNews(state)
    }
}


const NewsContainer = compose(
    connect<MapStateToPropsType,MapStateToDispatchType,{}, AppStateType>(mapStateToProps, {
        nextPage,
        prevPage,
        stopLoader,
        addAppleNews,
        startLoader,
        addTeslaNews,
        addBusinessNews,
        addTechCrunchNews,
        addWallStreetNews
    })
)(News)

export default NewsContainer