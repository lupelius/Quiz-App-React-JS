/*
*  Footer container handles navigational and representational
*  aspects of footer section, encapsulating question navigation business logic
*/
import React, { Component } from 'react';
import FooterLink from '../components/FooterLink';
import {
  BEGIN_LABEL,
} from '../components/constants'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  handleQuestionTitle,
  handleFooterButton,
  handleQuestionIndex,
  fetchGameDetails,
  handleCorr,
} from '../actions';
import { getURL, handleClick } from '../utility'

class Footer extends Component {
  state = {};

  render() {
    // onClick event on route link is used to handle header and footer changes
    return <footer>
            <Button variant="contained" color="secondary">
              <FooterLink
                text={this.props.text}
                handleClick={() => handleClick(this.props)}
                url={getURL(this.props.text)} />
            </Button>
           </footer>;
  }
}
Footer.propTypes = {
  text: PropTypes.string,
  data: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  handleQuestionTitle: PropTypes.func,
  handleFooterButton: PropTypes.func,
  handleQuestionIndex: PropTypes.func,
  fetchGameDetails: PropTypes.func,
};

Footer.defaultProps = {
  text: BEGIN_LABEL,
  data: {},
  currentQuestionIndex: 0,
  handleQuestionTitle: () => {},
  handleFooterButton: () => {},
  handleQuestionIndex: () => {},
  fetchGameDetails: () => {},
};
const mapStateToProps = ({ data = {}, currentQuestionIndex = 0 }) => ({
  data, currentQuestionIndex,
});
export default connect(
  mapStateToProps,
  {
    handleQuestionTitle,
    handleFooterButton,
    handleQuestionIndex,
    fetchGameDetails,
    handleCorr,
  }
)(Footer);
