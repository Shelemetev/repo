import { connect } from "react-redux";
import Home from "./Home";
import { addAppleNews,setDate } from '../../redux/main-reducer';
import { getDateSelector, getPage } from "../../redux/redux-selectors/main-selector";

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state),
        page: getPage(state)
    }
}

const HomeContainer = connect(mapStateToProps,{
    addAppleNews,
    setDate
})(Home)

export default HomeContainer