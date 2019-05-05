// All utility constants will be here
import {
  HOME_PATH,
  QUIZ_PATH,
  RESULT_PATH,
  PLAY_AGAIN_LABEL,
  BEGIN_LABEL,
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
export const createMarkup = qs => ({__html :
  qs.question});
