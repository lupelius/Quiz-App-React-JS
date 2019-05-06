import React from 'react';
import { INITIAL_TEXT_ONE, INITIAL_TEXT_TWO } from './constants'

const HomeScreen = (props) => {
  return  <div className="HolyGrail-section">
            <h2 className="HolyGrail-subsection">{INITIAL_TEXT_ONE}</h2>
            <h2 className="HolyGrail-subsection">{INITIAL_TEXT_TWO}</h2>
          </div>;
}

export default HomeScreen;
