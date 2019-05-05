import {
  FETCH_GAME_DETAILS,
} from "../actions/constants";
import { INITIAL_TITLE, BEGIN_LABEL } from '../components/constants'
import { createReducer } from 'redux-starter-kit'

const initialState = {
  data: {"results": []},
  questionTitle: INITIAL_TITLE,
  footerButton: BEGIN_LABEL,
  isLoadingData: false,
  currentQuestionIndex: 0,
}
export const rootReducer = createReducer(initialState, {
  SET_QUESTION_TITLE: (state, action) => {
    state.questionTitle = action.payload;
  },
  SET_FOOTER: (state, action) => {
    state.footerButton = action.payload;
  },
  ANSWER_QUESTION: (state, action) => {
    state.data.results[state.currentQuestionIndex]
      .selected_answer = action.payload;
  },
  HANDLE_CORRECT_ANSWERS_COUNT: (state, action) => {
    state.correct_questions = action.payload;
  },
  SET_QUESTION_INDEX: (state, action) => {
    state.currentQuestionIndex = action.payload;
  },
  SET_GAME_DETAILS: (state, action) => {
    state.data = action.payload;
  },
  API_START: (state, action) => {
    if (action.payload === FETCH_GAME_DETAILS) {
      state.isLoadingData = true;
    }
  },
  API_END: (state, action) => {
    if (action.payload === FETCH_GAME_DETAILS) {
      state.isLoadingData = false;
    }
  },
});
