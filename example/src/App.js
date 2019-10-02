import React, { Component } from 'react'

import LoginModal from 'react-login-modal'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creds: '',
      signUp: {
        password: "",
        username: "",
        email: "",

      },
      login: {
        username: "",
        password: ""
      }
    }
  }

  /**
   * Handle setting signUp credential state
   */
  handleSignup = (username, email, password) => {

    const signUp = this.state.signUp
    signUp.password = password;
    signUp.username = username;
    signUp.email = email

    // https://stackoverflow.com/questions/55348078/react-updates-state-when-clicked-twice
    this.setState({
      signUp,
    }, () => console.log(this.state.signUp));

  }

  /**
  * Handle setting login credential state
  */
  handleLogin = (username, password) => {
    const login = this.state.login
    login.password = password;
    login.username = username;

    this.setState({
      login,
    }, () => console.log(this.state.login));
  }

  render() {
    return (
      <div>
        <LoginModal
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          buttonColor={"#52AE64"}
          disabledButtonColor={"#C7E4CD"}
          buttonHoverColor={"#A7D5B0"}
          fontFamily={"roboto"}
          errorMessage={"Incorrect username or password"}
          errorEnable={true} 
          />
      </div>
    )
  }
}
