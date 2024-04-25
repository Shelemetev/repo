import { connect } from "react-redux"
import News from './News';
import { getDataNews, getDateSelector } from '../../redux/redux-selectors/main-selector';
import { nextPage,prevPage } from './../../redux/main-reducer';

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state),
        dataNews: getDataNews(state)
    }
}

const NewsContainer = connect(mapStateToProps, {
    nextPage,
    prevPage
})(News)

export default NewsContainer