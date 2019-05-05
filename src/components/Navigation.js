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

const AsyncQuizScreen = Loadable({
  loader: () => import("../containers/QuizScreen"),
  loading: Loading
});

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

export default Navigation;
