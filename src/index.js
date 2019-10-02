import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Home from './components/Home';

class LoginModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navigatePage: this.props.navigatePage
    }
  }

  render() {

    return (
      // needs to pass the propes, currently use defalt props
      <div>
        <Home 
          handleSignup={this.props.handleSignup}
          handleLogin={this.props.handleLogin}
          buttonColor={this.props.buttonColor}
          disabledButtonColor={this.props.disabledButtonColor}
          buttonHoverColor={this.props.buttonHoverColor}
          fontFamily={this.props.fontFamily}
          errorMessage={this.props.errorMessage}
          errorEnable={this.props.errorEnable}

        />
      </div>


    )
  }
}

export default LoginModal;

LoginModal.propTypes = {
  buttonColor: PropTypes.string,
  fontFamily: PropTypes.string,
  disabledButtonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  errorMessage: PropTypes.string,
  handleSignup: PropTypes.func,
  handleLogin: PropTypes.func,
  errorEnable: PropTypes.bool
};

LoginModal.defaultProps = {
  buttonColor: "#5264AE",
  buttonHoverColor: "#6373b6",
  disabledButtonColor: "#a8b1d6",
  fontFamily: "Nunito, Roboto, Arial, sans-serif",
  errorMessage: "Username or password is incorrect❓",
  handleLogin: () => console.log('handle login'),
  handleSignup: () => console.log('handle signup'),
  errorEnable: false
};

