import { connect } from "react-redux"
import News from './News';
import { getDataNews, getDateSelector } from '../../redux/redux-selectors/main-selector';
import { nextPage, prevPage, addAppleNews } from './../../redux/main-reducer';
import { compose } from "redux";
import RedirectHOC from "../../HOC/RedirectHOC";
import { stopLoader } from "../../redux/loader-reducer";
import { getSearch } from "../../redux/redux-selectors/loader-selector";
import { getPage } from './../../redux/redux-selectors/main-selector';

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state),
        dataNews: getDataNews(state),
        search: getSearch(state),
        page: getPage(state)
    }
}

const NewsContainer = compose(
    connect(mapStateToProps, {
    nextPage,
    prevPage,
    stopLoader,
    addAppleNews
}),
    RedirectHOC
)(News)

export default NewsContainer