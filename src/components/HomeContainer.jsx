import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => {
    return {

    }
}

const HomeContainer = connect(mapStateToProps,{})(Home)

export default HomeContainer