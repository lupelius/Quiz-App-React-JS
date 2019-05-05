// Business logic for quiz screen (or screen 2) is kept here
import React, { Component } from "react";
import { AMOUNT } from '../actions/constants';
import {
  ANSWER_ONE,
  ANSWER_TWO,
  RESULT_PATH,
  RESULT_TITLE,
  PLAY_AGAIN_LABEL,
} from '../components/constants';
import { connect } from "react-redux";
import {
  handleAnswerQuestion,
  handleQuestionTitle,
  handleQuestionIndex,
  handleCorr,
  handleFooterButton,
} from "../actions";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { createMarkup } from '../utility'

class QuizScreen extends Component {
  state = {};
  handleNextQS = answer => {
    const calculateCorrect = () => {
      // Determine if current question is correct
      const isCorrect = (this.props.data.results[this.props.currentQuestionIndex]
          .correct_answer === answer);
      // Persist correct questions count in redux store
      this.props.handleCorr(
         isCorrect ?
          this.props.correct_questions + 1 :
          this.props.correct_questions
      );
    };
    const nextQS = this.props.currentQuestionIndex + 1;
    // If we have finished questions, go to result page, or go to next qs
    if (nextQS >= AMOUNT) {
      calculateCorrect();
      // Set correct states for title and footer button, same as Footer.js'
      // handle click
      this.props.handleQuestionTitle(
        RESULT_TITLE
      );
      this.props.handleFooterButton(
        PLAY_AGAIN_LABEL
      );
      // Go to result page
      this.props.history.push(RESULT_PATH);
    } else {
      // Increament current index, determine correctScore and handle title changes
      this.props.handleQuestionTitle(
        this.props.data.results[nextQS].category
      );
      this.props.handleQuestionIndex(nextQS);
      calculateCorrect();
    }
  };
  handleAnswerTrue = () => {
    this.props.handleAnswerQuestion("True");
    this.handleNextQS("True");
  };
  handleAnswerFalse = () => {
    this.props.handleAnswerQuestion("False");
    this.handleNextQS("False");
  };
  render() {
    return <div>
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
              dangerouslySetInnerHTML={createMarkup(
                this.props.data.results[this.props.currentQuestionIndex]
              )}>
            </div>
            <div id="question-counter" >
              {this.props.currentQuestionIndex + 1} of {AMOUNT}
            </div>
          </div>;
  };
}
QuizScreen.propTypes = {
  data: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  handleAnswerQuestion: PropTypes.func,
  handleQuestionTitle: PropTypes.func,
  handleQuestionIndex: PropTypes.func,
  handleFooterButton: PropTypes.func,
  handleCorr: PropTypes.func,
};

QuizScreen.defaultProps = {
  data: {},
  currentQuestionIndex: 0,
  handleAnswerQuestion: () => {},
  handleQuestionTitle: () => {},
  handleQuestionIndex: () => {},
  handleFooterButton: () => {},
  handleCorr: () => {},
};
const mapStateToProps = ({ data = {}, currentQuestionIndex = 0,
  correct_questions = 0, }) => ({
  data, currentQuestionIndex, correct_questions,
});
export default connect(
  mapStateToProps,
  {
    handleAnswerQuestion, handleQuestionTitle, handleQuestionIndex, handleCorr,
    handleFooterButton,
  }
)(QuizScreen);
