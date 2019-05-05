import React, { Component } from "react";
import { connect } from "react-redux";
import '../assets/css/App.css';
import { fetchGameDetails } from "../actions";
import Loadable from 'react-loadable';
import Loading from '../components/LoadingComponent';
import { INITIAL_TITLE } from '../components/constants'
import LoadingIcon from '../components/LoadingIcon';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchGameDetails();
  }
  render() {
    // Pass down the results to be handled by Navigation and down to QuizScreen
    const { results } = this.props.data;

    const AsyncNavigation = Loadable({
      loader: () => import("../components/Navigation"),
      loading: Loading
    });
    return (
      <div>
        {this.props.isLoadingData ? <LoadingIcon />
        : <AsyncNavigation
          results={results} title={this.props.questionTitle}
        />}
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false, questionTitle= INITIAL_TITLE }) => ({
  data,
  isLoadingData,
  questionTitle,
});
export default connect(
  mapStateToProps,
  {
    fetchGameDetails
  }
)(App);
