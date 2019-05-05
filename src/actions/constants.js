// These are constants for redux actions, API calls etc
export const ACCESS_DENIED = "ACCESS_DENIED";

// This is the type of action to initiate api
export const API = "API";

// This is actually calling the axios http request to the api
export const API_START = "API_START";

// This is to be called on finally callback of http axios req
export const API_END = "API_END";

// This is to be used on general errors
export const API_ERROR = "API_ERROR";

// Game related actions
export const FETCH_GAME_DETAILS = "FETCH_GAME_DETAILS";
export const SET_GAME_DETAILS = "SET_GAME_DETAILS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SET_QUESTION_TITLE = "SET_QUESTION_TITLE";
export const SET_FOOTER = "SET_FOOTER";
export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";
export const HANDLE_CORRECT_ANSWERS_COUNT = "HANDLE_CORRECT_ANSWERS_COUNT";

// We can edit this const to have more questions
export const AMOUNT = 10;

// We can edit this const to adjust difficulty of questions to easy etc
export const DIFFICULTY = "hard";
// We can edit this const to adjust type of questions to multiselect etc
export const TYPE_OF_QUESTIONS = "boolean";
// Make up the api call url with default amount, difficulty, question type
export const URL = `https://opentdb.com/api.php?amount=
  ${AMOUNT}&difficulty=${DIFFICULTY}&type=${TYPE_OF_QUESTIONS}`;
