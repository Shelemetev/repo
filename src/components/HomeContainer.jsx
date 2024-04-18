import { connect } from "react-redux";
import Home from "./Home";
import { addAppleNews,setDate } from './../redux/home-reducer';
import { getDateSelector } from "../redux/redux-selectors/home-selector";

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state)
    }
}

const HomeContainer = connect(mapStateToProps,{
    addAppleNews,
    setDate
})(Home)

export default HomeContainer