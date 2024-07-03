import {connect, ConnectedProps} from "react-redux";
import Home from "./Home.tsx";
import {addAppleNews, setDate, setSearchedNews} from '../../redux/main-reducer.ts';
import {getDateSelector, getPage} from "../../redux/redux-selectors/main-selector.ts";
import { compose } from "redux";
import { startLoader } from '../../redux/loader-reducer.ts';
import { startSearch } from './../../redux/main-reducer.ts';
import {getSearch} from "../../redux/redux-selectors/loader-selector.ts";
import {AppStateType} from "../../redux/store";


type MapStateToPropsType = {
    date:string,
    search:boolean,
    page:number
}

type MapStateToDispatchType = {
    setDate : (day:string) => void,
    startLoader : () => void,
    setSearchedNews : () => void,
}
const mapStateToProps = (state:AppStateType) : MapStateToPropsType => {
    return {
        date: getDateSelector(state),
        search: getSearch(state),
        page : getPage(state)
    }
}

const HomeContainer =
    connect<MapStateToPropsType,MapStateToDispatchType,{}, AppStateType>(mapStateToProps,{
        setDate,
        startLoader,
        setSearchedNews
    })(Home)


export default HomeContainer