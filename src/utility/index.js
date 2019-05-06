// All utility constants will be here
import {
  HOME_PATH,
  QUIZ_PATH,
  RESULT_PATH,
  PLAY_AGAIN_LABEL,
  BEGIN_LABEL,
  INITIAL_TITLE,
  SKIP,
  RESULT_TITLE,
} from '../components/constants'

// Handle paths for routes depending on what label it has
export const getURL = text => {
  switch (text) {
    case BEGIN_LABEL:
      return QUIZ_PATH;
    case PLAY_AGAIN_LABEL:
      return HOME_PATH;
    default:
      return RESULT_PATH;
  }
}

// We should also check for malicious code, javascript etc for production
export const createMarkup = (qs, fromResults) => ({
  __html :
    (fromResults) ?
    `"${qs.question}" <strong>
      ${(qs.selected_answer) ?
        `You said "`+ qs.selected_answer + `"` :
        `Unanswered`
      }, correct answer: "${qs.correct_answer}",
      Cat: "${qs.category}",
      Diff: <span class='difficulty'>"${qs.difficulty}"</span></strong>` :
      qs.question
  });

export const handleClick = props => {
  switch(getURL(props.text)) {
    // To Screen two
    case QUIZ_PATH:
      // Set title and button to question category and skip button
      props.handleQuestionTitle(
        props.data.results[props.currentQuestionIndex].category
      );
      props.handleFooterButton(
        SKIP
      );
      break;
    // To screen one
    case HOME_PATH:
      // get new questions from api, followed by resetting all game data
      props.fetchGameDetails();
      // Reset questions' current index to 0
      props.handleQuestionIndex(0);
      // Reset title to welcome title
      props.handleQuestionTitle(
        INITIAL_TITLE
      );
      // Reset button to begin
      props.handleFooterButton(
        BEGIN_LABEL
      );
      // Reset correct number of answers
      props.handleCorr(0);
      break;
    // To screen three
    case RESULT_PATH:
      // Set title to results and button to play again state
      props.handleQuestionTitle(
        RESULT_TITLE
      );
      props.handleFooterButton(
        PLAY_AGAIN_LABEL
      );
      break;
    default:
  }
}
