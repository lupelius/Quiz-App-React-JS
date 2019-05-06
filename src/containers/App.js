// Business logic for setting up game nav and fetching game details initially
import React, { Component } from 'react';
import { connect } from "react-redux";
import '../assets/css/App.css';
import { fetchGameDetails } from "../actions";
import Loadable from 'react-loadable';
import Loading from '../components/LoadingComponent';
import { INITIAL_TITLE, BEGIN_LABEL} from '../components/constants'
import LoadingIcon from '../components/LoadingIcon';
import PropTypes from 'prop-types';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchGameDetails();
  }
  render() {
    // Pass down the results to be handled by Navigation and down to QuizScreen
    const { results } = this.props.data;
    // Code splitting Navigation component so our app is faster
    const AsyncNavigation = Loadable({
      loader: () => import("../components/Navigation"),
      loading: Loading
    });
    return (
      <div>
        {this.props.isLoadingData ? <LoadingIcon />
        : <AsyncNavigation
          results={results}
          title={this.props.questionTitle}
          footerButton={this.props.footerButton}
        />}
      </div>
    );
  }
}
App.propTypes = {
  data: PropTypes.object,
  isLoadingData: PropTypes.bool,
  questionTitle: PropTypes.string,
  footerButton: PropTypes.string,
  fetchGameDetails: PropTypes.func,
};

App.defaultProps = {
  data: {},
  isLoadingData: false,
  questionTitle: INITIAL_TITLE,
  footerButton: BEGIN_LABEL,
  fetchGameDetails: () => {},
};
const mapStateToProps = ({
  data = {},
  isLoadingData = false,
  questionTitle = INITIAL_TITLE,
  footerButton = BEGIN_LABEL,
}) => ({
  data,
  isLoadingData,
  questionTitle,
  footerButton,
});
export default connect(
  mapStateToProps,
  {
    fetchGameDetails
  }
)(App);
