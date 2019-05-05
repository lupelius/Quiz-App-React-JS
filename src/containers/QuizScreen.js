import React, { Component } from "react";
import { AMOUNT } from '../actions/constants';
import { ANSWER_ONE, ANSWER_TWO } from '../components/constants';
import { connect } from "react-redux";
import {
  handleAnswerQuestion,
  handleQuestionTitle,
  handleQuestionIndex }
from "../actions";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


class QuizScreen extends Component {
  state = {};
  // We should also check for malicious code, javascript etc for production
  createMarkup = html => ({__html : html});
  handleNextQS = () => {
    // Increament current index and handle title changes
    this.props.handleQuestionTitle(
      this.props.data.results[this.props.currentQuestionIndex + 1].category
    );
    this.props.handleQuestionIndex(this.props.currentQuestionIndex + 1);
  }
  handleAnswerTrue = () => {
    this.props.handleAnswerQuestion("True");
    this.handleNextQS();
  };
  handleAnswerFalse = () => {
    this.props.handleAnswerQuestion("False");
    this.handleNextQS();
  };
  render() {
    const q = this.props.data.results[this.props.currentQuestionIndex];
    return <div>
            {
                <div key={this.props.currentQuestionIndex}>
                  <div id="question-answers" >
                    <Button className="button" onClick={this.handleAnswerTrue}
                      variant="contained" color="primary">
                      {ANSWER_ONE}
                    </Button>
                    <Button className="button" onClick={this.handleAnswerFalse}
                      variant="contained" color="secondary">
                      {ANSWER_TWO}
                    </Button>
                  </div>
                  <div id="question-container"
                    dangerouslySetInnerHTML={this.createMarkup(q.question)}>
                  </div>
                  <div id="question-counter" >
                    {this.props.currentQuestionIndex + 1} of {AMOUNT}
                  </div>
                </div>

              }
           </div>;
  };
}
QuizScreen.propTypes = {
  data: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  handleAnswerQuestion: PropTypes.func,
  handleQuestionTitle: PropTypes.func,
  handleQuestionIndex: PropTypes.func,
};

QuizScreen.defaultProps = {
  data: {},
  currentQuestionIndex: 0,
  handleAnswerQuestion: () => {},
  handleQuestionTitle: () => {},
  handleQuestionIndex: () => {},
};
const mapStateToProps = ({ data = {}, currentQuestionIndex = 0 }) => ({
  data, currentQuestionIndex,
});
export default connect(
  mapStateToProps,
  {
    handleAnswerQuestion, handleQuestionTitle, handleQuestionIndex
  }
)(QuizScreen);
