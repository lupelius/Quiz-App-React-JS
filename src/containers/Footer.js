/*
*  Footer container handles navigational and representational
*  aspects of footer section, encapsulating question navigation business logic
*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  INITIAL_TITLE,
  HOME_PATH,
  QUIZ_PATH,
  RESULT_PATH,
  PLAY_AGAIN_LABEL,
  BEGIN_LABEL,
  SKIP,
  RESULT_TITLE,
} from '../components/constants'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
  handleQuestionTitle,
  handleFooterButton,
  handleQuestionIndex,
  fetchGameDetails,
} from '../actions';
import { getURL } from '../utility'

class Footer extends Component {
  state = {};
  handleClick = () => {
    switch(getURL(this.props.text)) {
      // To Screen two
      case QUIZ_PATH:
        // Set title and button to question category and skip button
        this.props.handleQuestionTitle(
          this.props.data.results[this.props.currentQuestionIndex].category
        );
        this.props.handleFooterButton(
          SKIP
        );
        break;
      // To screen one
      case HOME_PATH:
        // get new questions from api, followed by resetting all game data
        this.props.fetchGameDetails();
        // Reset questions' current index to 0
        this.props.handleQuestionIndex(0);
        // Reset title to welcome title
        this.props.handleQuestionTitle(
          INITIAL_TITLE
        );
        // Reset button to begin
        this.props.handleFooterButton(
          BEGIN_LABEL
        );
        // Reset correct number of answers
        this.props.handleCorr(0);
        break;
      // To screen three
      case RESULT_PATH:
        // Set title to results and button to play again state
        this.props.handleQuestionTitle(
          RESULT_TITLE
        );
        this.props.handleFooterButton(
          PLAY_AGAIN_LABEL
        );
        break;
      default:
    }
  }
  render() {
    // onClick event on route link is used to handle header and footer changes
    return <footer>
            <Button variant="contained" color="secondary">
              <Link onClick={this.handleClick}
                to={getURL(this.props.text)}>{this.props.text}</Link>
            </Button>
           </footer>;
  }
}
Footer.propTypes = {
  text: PropTypes.string,
  data: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  handleQuestionTitle: PropTypes.func,
  handleFooterButton: PropTypes.func,
  handleQuestionIndex: PropTypes.func,
  fetchGameDetails: PropTypes.func,
};

Footer.defaultProps = {
  text: BEGIN_LABEL,
  data: {},
  currentQuestionIndex: 0,
  handleQuestionTitle: () => {},
  handleFooterButton: () => {},
  handleQuestionIndex: () => {},
  fetchGameDetails: () => {},
};
const mapStateToProps = ({ data = {}, currentQuestionIndex = 0 }) => ({
  data, currentQuestionIndex,
});
export default connect(
  mapStateToProps,
  {
    handleQuestionTitle,
    handleFooterButton,
    handleQuestionIndex,
    fetchGameDetails,
  }
)(Footer);
