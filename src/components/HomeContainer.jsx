import { connect } from "react-redux";
import Home from "./Home";
import { addAppleNews } from './../redux/home-reducer';

const mapStateToProps = (state) => {
    return {

    }
}

const HomeContainer = connect(mapStateToProps,{
    addAppleNews
})(Home)

export default HomeContainer