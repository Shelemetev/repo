import { connect } from "react-redux"
import News from './News';
import { getDateSelector } from './../../redux/redux-selectors/home-selector';

const mapStateToProps = (state) => {
    return {
        date: getDateSelector(state)
    }
}

const NewsContainer = connect(mapStateToProps, {

})(News)

export default NewsContainer