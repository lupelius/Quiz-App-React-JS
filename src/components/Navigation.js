import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from '../containers/Footer';
import {
  HOME_PATH,
  QUIZ_PATH,
  RESULT_PATH,
} from './constants'
import Loadable from 'react-loadable';
import Loading from './LoadingComponent';
import HomeScreen from './HomeScreen';
import PropTypes from 'prop-types';

// Code splitting QuizScreen to make app faster
const AsyncQuizScreen = Loadable({
  loader: () => import("../containers/QuizScreen"),
  loading: Loading
});
// Code splitting ResultScreen to make app faster
const AsyncResultScreen = Loadable({
  loader: () => import("./ResultScreen"),
  loading: Loading
});

const Navigation = props => (
    <BrowserRouter>
      <div className="HolyGrail">
        <Header text={props.title} />
        <div className="HolyGrail-body">
          <main className="HolyGrail-content">
            <Switch>
              <Route path={HOME_PATH} exact component={HomeScreen} />
              <Route
                path={QUIZ_PATH}
                render={(routeProps) => (
                  <AsyncQuizScreen {...routeProps} {...props}/>
                )}
              />
              <Route path={RESULT_PATH} component={AsyncResultScreen} />
            </Switch>
          </main>
        </div>
        <Footer text={props.footerButton} />
      </div>
    </BrowserRouter>
  )
Navigation.propTypes = {
  title: PropTypes.string,
  footerButton: PropTypes.string,
};

Navigation.defaultProps = {
  title: "",
  footerButton: "",
};
export default Navigation;
