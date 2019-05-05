import {
  ANSWER_QUESTION,
  SET_QUESTION_INDEX,
  SET_QUESTION_TITLE,
  SET_GAME_DETAILS,
  API,
  FETCH_GAME_DETAILS,
  URL,
  SET_FOOTER,
  HANDLE_CORRECT_ANSWERS_COUNT,
} from "./constants";

export const fetchGameDetails = () =>
  apiAction({
    url: URL,
    onSuccess: setGameDetails,
    onFailure: () => console.log("Error occured loading games"),
    label: FETCH_GAME_DETAILS
  })

const setGameDetails = data => ({
    type: SET_GAME_DETAILS,
    payload: data,
})

export const handleAnswerQuestion = data => ({
    type: ANSWER_QUESTION,
    payload: data,
  })

export const handleQuestionTitle = data => ({
    type: SET_QUESTION_TITLE,
    payload: data,
})

export const handleFooterButton = data => ({
    type: SET_FOOTER,
    payload: data,
})

export const handleQuestionIndex = data => ({
    type: SET_QUESTION_INDEX,
    payload: data,
})

export const handleCorr = data => ({
    type: HANDLE_CORRECT_ANSWERS_COUNT,
    payload: data,
})

// Everything needed to extend the api action is defined here
function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
