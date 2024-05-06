import { connect } from "react-redux";
import Home from "./Home";
import { addAppleNews,setDate } from '../../redux/main-reducer';
import { getDateSelector, getPage } from "../../redux/redux-selectors/main-selector";
import { compose } from "redux";
import RedirectHOC from './../../HOC/RedirectHOC';
import { startLoader } from './../../redux/loader-reducer';
import { getSearch } from "../../redux/redux-selectors/loader-selector";

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state),
        search: getSearch(state)
    }
}

const HomeContainer = compose(
    connect(mapStateToProps,{
        setDate,
        startLoader
    }),
    RedirectHOC
)(Home)

export default HomeContainer