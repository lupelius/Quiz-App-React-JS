/* Footer container handles navigational and representational
* aspects of footer section
*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
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
} from "../actions";

const getURL = text => {
  switch (text) {
    case BEGIN_LABEL:
      return QUIZ_PATH;
    case PLAY_AGAIN_LABEL:
      return HOME_PATH;
    default:
      return RESULT_PATH;
  }
}
class Footer extends Component {
  state = {};
  handleClick = () => {
    switch(getURL(this.props.text)) {
      case QUIZ_PATH:
        this.props.handleQuestionTitle(
          this.props.data.results[this.props.currentQuestionIndex].category
        );
        this.props.handleFooterButton(
          SKIP
        );
        break;
      case HOME_PATH:
        // Set questions back to zero, get new questions, set title etc
        this.props.fetchGameDetails();
        this.props.handleQuestionIndex(0);
        this.props.handleQuestionTitle(
          this.props.data.results[this.props.currentQuestionIndex].category
        );
        this.props.handleFooterButton(
          BEGIN_LABEL
        );
        break;
      case RESULT_PATH:
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
