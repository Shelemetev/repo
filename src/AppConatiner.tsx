import { connect } from "react-redux";
import { getSearch } from './redux/redux-selectors/loader-selector.ts';
import App from './App';

const mapStateToProps = (state) : {search:boolean} => {
    return {
        search : getSearch(state)
    }
}

export const AppContainer = connect(mapStateToProps, {

})(App)