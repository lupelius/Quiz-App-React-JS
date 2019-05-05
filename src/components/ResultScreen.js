import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { AMOUNT } from '../actions/constants'
import { createMarkup } from '../utility'

// Using index as map key array is always intact, otherwise I'd use uuid/v5
// or pass the primarykey from the database store if I had access to API end
const ResultScreen = props => (
  <div>
    <h2>{props.correct_questions} / {AMOUNT}</h2>
    <ol>
      {props.data.results.map(function(q, i){
        return <li key={i} className="result-item">
                <div id="result-correction-container">
                  {q.correct_answer === q.selected_answer ? "+" : "-"}
                </div>
                <div id="result-question-container"
                  dangerouslySetInnerHTML={createMarkup(q)}>
                </div>
               </li>
      })}
    </ol>
  </div>
);

ResultScreen.propTypes = {
  data: PropTypes.object,
  correct_questions: PropTypes.number,
};

ResultScreen.defaultProps = {
  data: {},
  correct_questions: 0,
};
const mapStateToProps = ({ data = {}, correct_questions = 0 }) => ({
  data,
  correct_questions,
});
export default connect(
  mapStateToProps
)(ResultScreen);
