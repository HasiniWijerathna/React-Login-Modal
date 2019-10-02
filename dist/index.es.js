import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n@import url('https://fonts.googleapis.com/css?family=Nunito:600,700&display=swap');\n\n.styles_loginContainer__1OP_F \t\t{ \n  font-family: Nunito, Roboto, Arial, sans-serif;\n\n/* \n  margin:30px auto 0; \n  display:block; \n  background:gold; */\n\n\n  /* width: 300px; */\n  /* border: 15px solid green; */\n  /* padding: 50px;\n  margin: 20px; */\n  \n\n  /* background: blue;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100px;\n  height: 100px; */\n\n\n\n\n  \n  width: 300px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n\tbackground: #fafafa;\n\tborder: 1px solid #ebebeb;\n\tbox-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\n  \n \n}\n\n.styles_loginGroup__3GiQp {\n  position:relative; \n  margin-bottom:45px;\n  /* padding-left: 40px; */\n}\n\ninput \t\t\t\t{\n  /* font-size:18px;\n  padding:15px 10px 10px 15px;\n  display:block;\n  width: 80%;\n  border:none;\n  border-bottom:1px solid #757575; */\n\n\n  font-size: 18px;\n  font-family: Nunito, Roboto, Arial, sans-serif;\n\tpadding: 10px 10px 10px 5px;\n\t-webkit-appearance: none;\n\tdisplay: block;\n\tbackground: #fafafa;\n\tcolor: #394679;\n\twidth: 95%;\n\tborder: none;\n\tborder-radius: 0;\n\tborder-bottom: 1px solid #757575;\n}\ninput:focus \t\t{ outline:none; }\n\nlabel \t\t\t\t {\n  color:#999; \n  font-size:18px;\n  font-weight:normal;\n  position:absolute;\n  pointer-events:none;\n  left:5px;\n  top:10px;\n  transition:0.2s ease all; \n  -moz-transition:0.2s ease all; \n  -webkit-transition:0.2s ease all;\n}\n\n/* active state  */\ninput:focus ~ label, input:valid ~ label \t\t{\n  top:-20px;\n  font-size:14px;\n  color:#5264AE;\n} \n";
var styles = { "loginContainer": "styles_loginContainer__1OP_F", "loginGroup": "styles_loginGroup__3GiQp" };
styleInject(css);

/**
* Returns the email validation error
* @param  {String}  email   user email
* @return {String}          email error
*/
var emailValidator = function emailValidator(email) {
    var error = null;

    if (!email || email.length === 0) {
        error = '';
    } else if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        error = 'Invalid email address';
    }
    return error;
};

/**
 * Returns the password validation error
 * @param  {String}  password   user password
 * @return {String}             password error
 */
var passwordValidator = function passwordValidator() {
    var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var passwordError = null;
    var regEx = RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");

    if (!password || password.length === 0) {
        passwordError = '';
    } else if (password.length < 8) {
        passwordError = 'Password must contain atleast 8 characters';
    } else if (regEx.test(password)) {
        passwordError = "Passowrd must contains one letter and one number";
    }
    return passwordError;
};

/**
 * Returns the confirm password validation error
 * @param  {String}  confirmPassword   user confirm password
 * @return {String}             confirm password  error
 */
var confirmPasswordValidator = function confirmPasswordValidator() {
    var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var confirmPassword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var confirmPasswordError = null;

    if (confirmPassword.length && password.length) {
        if (password !== confirmPassword) {
            confirmPasswordError = 'Confirm password does not match';
        }
    } else if (!password) {
        confirmPasswordError = 'No password to match';
    }

    return confirmPasswordError;
};

/**
 * Returns the login password validation error
 * @param  {String}  loginPassword   user login password
 * @return {String}                  login password error
 */
var loginPasswordValidator = function loginPasswordValidator(password) {
    var passwordError = '';

    if (!password || password.length === 0) {
        passwordError = 'Password is required';
    }
    return passwordError;
};

/**
 * Returns the edit name validation error
 * @param  {String}  name   user edit name
 * @return {String}         edit name error
 */
var nameValidator = function nameValidator(name) {
    var error = null;
    if (!name || name.length === 0) {
        error = 'Name is required';
    } else if (name && !/^[a-zA-Z]*$/.test(name)) {
        error = 'Invalid name';
    } else if (!/[A-Z].*/.test(name)) {
        error = 'Must starts with capital case';
    } else if (name.split(" ").length > 1) {
        error = 'Invalid name';
    } else if (name.length < 3) {
        error = 'Username must contain atleast 3 characters';
    }
    return error;
};

var loginUsernameValidator = function loginUsernameValidator(username) {
    var usernameError = '';

    if (!username || username.length === 0) {
        usernameError = 'Username is required,';
    }

    return usernameError;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//need to fix the rewriting the button styles

/**
* Represents the the login sign up functionalities
*/

var Home = function (_Component) {
  inherits(Home, _Component);

  /**
  * Class constructor
  * @param {Object} props
  */
  function Home(props) {
    classCallCheck(this, Home);

    var _this = possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.handleLogin = function () {
      var _this$state = _this.state,
          loginUsername = _this$state.loginUsername,
          loginPassword = _this$state.loginPassword;

      _this.props.handleLogin(loginUsername, loginPassword);
    };

    _this.handleSignUp = function () {
      var _this$state2 = _this.state,
          signUpUsername = _this$state2.signUpUsername,
          signUpEmail = _this$state2.signUpEmail,
          signUpPassword = _this$state2.signUpPassword;

      _this.props.handleSignup(signUpUsername, signUpEmail, signUpPassword);
    };

    _this.navigateSignup = function () {
      var error = _this.state.error;
      error.usernameMessage = "";
      error.passwordMessage = "";

      _this.setState({
        navigatePage: true,
        error: error
      });
    };

    _this.handleLoginUsername = function (event) {
      var username = "" + event.target.value;
      var error = _this.state.error;

      error.usernameMessage = loginUsernameValidator(username);

      _this.setState({
        error: error,
        loginUsername: username
      });
    };

    _this.handleLoginPassword = function (event) {
      var password = "" + event.target.value;
      var error = _this.state.error;

      error.passwordMessage = loginPasswordValidator(password);

      _this.setState({
        error: error,
        loginPassword: password
      });
    };

    _this.handleButtonHoverEnter = function () {
      var propStyles = _extends({}, _this.state.propStyles, {
        background: _this.props.buttonHoverColor
      });
      _this.setState({
        propStyles: propStyles
      });
    };

    _this.handleButtonHoverLeave = function () {
      var propStyles = _extends({}, _this.state.propStyles, {
        background: _this.props.buttonColor
      });
      _this.setState({
        propStyles: propStyles
      });
    };

    _this.handleSignUpHoverEnter = function () {
      var signUpStyles = _extends({}, _this.state.signUpStyles, {
        color: _this.props.buttonHoverColor
      });
      _this.setState({
        signUpStyles: signUpStyles
      });
    };

    _this.handleSignUpHoverLeave = function () {
      var signUpStyles = _extends({}, _this.state.signUpStyles, {
        color: _this.props.buttonColor
      });
      _this.setState({
        signUpStyles: signUpStyles
      });
    };

    _this.handleSignupUsername = function (event) {
      var username = "" + event.target.value;
      var error = _this.state.error;

      error.usernameMessage = loginUsernameValidator(username);
      error.usernameMessage = nameValidator(username);

      _this.setState({
        error: error,
        signUpUsername: username
      });
    };

    _this.handleSignupPassword = function (event) {
      var password = "" + event.target.value;
      var error = _this.state.error;
      var confirmPassword = _this.state.signUpConfirmPassword;

      error.passwordMessage = loginPasswordValidator(password);
      error.passwordMessage = passwordValidator(password);

      error.confirmPasswordMessage = confirmPasswordValidator(password, confirmPassword);

      _this.setState({
        error: error,
        signUpPassword: password
      });
    };

    _this.handleSignupEmail = function (event) {
      var email = "" + event.target.value;
      var error = _this.state.error;

      //   error.emailMessage = (password);
      error.emailMessage = emailValidator(email);

      _this.setState({
        error: error,
        signUpEmail: email
      });
    };

    _this.handleSignupConfirmPassword = function (event) {
      var confirmPassword = "" + event.target.value;
      var error = _this.state.error;
      var password = _this.state.signUpPassword;

      error.confirmPasswordMessage = confirmPasswordValidator(password, confirmPassword);

      _this.setState({
        error: error,
        signUpConfirmPassword: confirmPassword
      });
    };

    _this.state = {
      propStyles: {
        background: _this.props.buttonColor,
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        width: 300,
        padding: "0 30px",
        fontSize: "18px",
        fontFamily: _this.props.fontFamily
      },
      font: {
        fontFamily: _this.props.fontFamily
      },
      error: {
        open: _this.props.errorEnable,
        usernameMessage: "",
        passwordMessage: "",
        confirmPasswordMessage: "",
        emailMessage: "",
        message: _this.props.errorMessage
      },
      disabledButton: {
        background: _this.props.disabledButtonColor,
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        width: 300,
        padding: "0 30px",
        fontSize: "18px",
        fontFamily: _this.props.fontFamily
      },
      navigatePage: false,
      signUpStyles: {
        color: _this.props.buttonColor
      },
      errorMessageStyles: {
        margin: "auto",
        width: "100%",
        paddingBottom: "30px",
        color: "#FF0000",
        font: _this.props.fontFamily
      },

      signUpPassword: "",
      signUpUsername: "",
      signUpConfirmPassword: "",
      signUpEmail: "",
      loginUsername: "",
      loginPassword: ""
    };
    return _this;
  }

  /**
   * Handle login page navigation using props
   */


  /**
   * Hanlde sign up page navigation using props
   */


  /**
   * Handle rendering sign up content
   */


  /**
   * Handle setting login usernmae state
   * @param  {String} event Changer event of the login username
   */


  /**
   * Handle setting login password state
   * @param  {String} event Changer event of the login password
   */


  /**
   * Handle button hover event for mouse enter
   */


  /**
   * Handle button hover event for mouse leave
   */


  /**
   * Handle sign up button hover for mouse enter
   */


  /**
   * Handle sign up button hover for mouse leave
   */


  /**
  * Handle setting signup username state
  * @param  {String} event Changer event of the signup username
  */


  /**
   * Handle setting signup password state
   * @param  {String} event Changer event of the signup password
   */


  /**
   * Handle setting signup email state
   * @param  {String} event Changer event of the signup email
   */


  /**
   * Handle setting signup confirm password state
   * @param  {String} event Changer event of the signup confirm password
   */


  createClass(Home, [{
    key: "render",


    /**
    * Describes the elements on the login and sign up
    * @return {String} HTML elements
    */
    value: function render() {
      var _React$createElement;

      var _state = this.state,
          propStyles = _state.propStyles,
          font = _state.font,
          error = _state.error,
          disabledButton = _state.disabledButton,
          navigatePage = _state.navigatePage,
          signUpStyles = _state.signUpStyles,
          signUpPassword = _state.signUpPassword,
          signUpConfirmPassword = _state.signUpConfirmPassword,
          signUpEmail = _state.signUpEmail,
          signUpUsername = _state.signUpUsername,
          loginUsername = _state.loginUsername,
          loginPassword = _state.loginPassword,
          errorMessageStyles = _state.errorMessageStyles;


      var loginButton = null;
      var errorText = null;
      var mainContent = null;
      var errorList = null;
      var signupButton = null;

      var _ref = "",
          usernameError = _ref.usernameError,
          passwordError = _ref.passwordError,
          emailError = _ref.emailError,
          confirmPasswordError = _ref.confirmPasswordError;


      if (error.usernameMessage || error.passwordMessage || error.emailMessage) {
        errorText = error.usernameMessage + " " + error.passwordMessage + " " + error.emailMessage;
      } else if (error.open) {
        errorText = error.message;
      }

      if (navigatePage) {
        usernameError = error.usernameMessage;
        passwordError = error.passwordMessage;
        emailError = error.emailMessage;
        confirmPasswordError = error.confirmPasswordMessage;

        errorList = React.createElement(
          "div",
          { style: errorMessageStyles },
          React.createElement(
            "div",
            { style: font },
            React.createElement(
              "div",
              null,
              usernameError
            ),
            React.createElement(
              "div",
              null,
              passwordError
            ),
            React.createElement(
              "div",
              null,
              emailError
            ),
            React.createElement(
              "div",
              null,
              confirmPasswordError
            )
          )
        );
      }

      var enebledSignUpButton = React.createElement(
        "button",
        {
          type: "button",
          style: propStyles,
          onClick: this.handleSignUp,
          onMouseEnter: this.handleButtonHoverEnter,
          onMouseLeave: this.handleButtonHoverLeave
        },
        "Sign up"
      );

      var disbaleSignupButton = React.createElement(
        "button",
        { type: "button", style: disabledButton, disabled: true },
        "Sign up"
      );
      var errorMessage = React.createElement(
        "div",
        { style: errorMessageStyles },
        React.createElement(
          "div",
          { style: font },
          errorText
        )
      );

      if (!signUpPassword.length || !signUpConfirmPassword || !signUpEmail || !signUpUsername) {
        signupButton = disbaleSignupButton;
      } else if (error.confirmPasswordMessage || error.emailMessage || error.passwordMessage || error.usernameMessage) {
        signupButton = disbaleSignupButton;
      } else {
        signupButton = enebledSignUpButton;
      }

      var enebledLoginButton = React.createElement(
        "button",
        {
          type: "button",
          style: propStyles,
          onClick: this.handleLogin,
          onMouseEnter: this.handleButtonHoverEnter,
          onMouseLeave: this.handleButtonHoverLeave
        },
        "Login"
      );

      var disbaleLoginButton = React.createElement(
        "button",
        { type: "button", style: disabledButton, disabled: true },
        "Login"
      );

      if (!loginUsername || !loginPassword) {
        loginButton = disbaleLoginButton;
      } else if (error.confirmPasswordMessage || error.emailMessage) {
        loginButton = disbaleLoginButton;
      } else if (error.open) {
        loginButton = disbaleLoginButton;
      } else {
        loginButton = enebledLoginButton;
      }

      var login = React.createElement(
        "div",
        { className: styles.loginContainer },
        errorMessage,
        React.createElement(
          "div",
          { className: styles.loginGroup },
          React.createElement("input", {
            type: "text",
            required: true,
            style: font,
            onChange: this.handleLoginUsername
          }),
          React.createElement(
            "label",
            { style: font },
            "Username"
          )
        ),
        React.createElement(
          "div",
          { className: styles.loginGroup },
          React.createElement("input", (_React$createElement = {
            style: font,
            type: "text",
            required: true
          }, defineProperty(_React$createElement, "type", "password"), defineProperty(_React$createElement, "onChange", this.handleLoginPassword), _React$createElement)),
          React.createElement(
            "label",
            { style: font },
            "Password"
          )
        ),
        React.createElement(
          "div",
          { style: font },
          loginButton,
          React.createElement(
            "div",
            {
              style: signUpContentStyles,
              onClick: this.navigateSignup,
              onMouseEnter: this.handleSignUpHoverEnter,
              onMouseLeave: this.handleSignUpHoverLeave
            },
            "Don't have an account? ",
            React.createElement(
              "b",
              { style: signUpStyles },
              "Sign Up"
            )
          )
        )
      );

      var signUp = React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: styles.loginContainer },
          errorList,
          React.createElement(
            "div",
            { className: styles.loginGroup },
            React.createElement("input", {
              type: "text",
              required: true,
              style: font,
              onChange: this.handleSignupUsername
            }),
            React.createElement(
              "label",
              { style: font },
              "Username"
            )
          ),
          React.createElement(
            "div",
            { className: styles.loginGroup },
            React.createElement("input", {
              type: "text",
              required: true,
              style: font,
              onChange: this.handleSignupEmail
            }),
            React.createElement(
              "label",
              { style: font },
              "Email"
            )
          ),
          React.createElement(
            "div",
            { className: styles.loginGroup },
            React.createElement("input", {
              type: "text",
              required: true,
              style: font,
              onChange: this.handleSignupPassword
            }),
            React.createElement(
              "label",
              { style: font },
              "Password"
            )
          ),
          React.createElement(
            "div",
            { className: styles.loginGroup },
            React.createElement("input", {
              type: "text",
              required: true,
              style: font,
              onChange: this.handleSignupConfirmPassword
            }),
            React.createElement(
              "label",
              { style: font },
              "Confirm Password"
            )
          ),
          React.createElement(
            "div",
            { style: font },
            signupButton
          )
        )
      );

      navigatePage === false ? mainContent = login : mainContent = signUp;

      return React.createElement(
        "div",
        null,
        mainContent
      );
    }
  }]);
  return Home;
}(Component);

Home.propTypes = {
  buttonColor: PropTypes.string,
  fontFamily: PropTypes.string,
  disabledButtonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  errorMessage: PropTypes.string,
  handleSignup: PropTypes.func,
  handleLogin: PropTypes.func,
  errorEnable: PropTypes.bool
};

Home.defaultProps = {
  buttonColor: "#5264AE",
  buttonHoverColor: "#6373b6",
  disabledButtonColor: "#a8b1d6",
  fontFamily: "Nunito, Roboto, Arial, sans-serif",
  errorMessage: "Username or password is incorrect❓",
  handleLogin: function handleLogin() {
    return console.log('handle login');
  },
  handleSignup: function handleSignup() {
    return console.log('handle signup');
  },
  errorEnable: false
};

var signUpContentStyles = {
  margin: "auto",
  width: "80%",
  paddingTop: "40px"
};

var LoginModal = function (_Component) {
  inherits(LoginModal, _Component);

  function LoginModal(props) {
    classCallCheck(this, LoginModal);

    var _this = possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));

    _this.state = {
      navigatePage: _this.props.navigatePage
    };
    return _this;
  }

  createClass(LoginModal, [{
    key: 'render',
    value: function render() {

      return (
        // needs to pass the propes, currently use defalt props
        React.createElement(
          'div',
          null,
          React.createElement(Home, {
            handleSignup: this.props.handleSignup,
            handleLogin: this.props.handleLogin,
            buttonColor: this.props.buttonColor,
            disabledButtonColor: this.props.disabledButtonColor,
            buttonHoverColor: this.props.buttonHoverColor,
            fontFamily: this.props.fontFamily,
            errorMessage: this.props.errorMessage,
            errorEnable: this.props.errorEnable

          })
        )
      );
    }
  }]);
  return LoginModal;
}(Component);

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
  handleLogin: function handleLogin() {
    return console.log('handle login');
  },
  handleSignup: function handleSignup() {
    return console.log('handle signup');
  },
  errorEnable: false
};

export default LoginModal;
//# sourceMappingURL=index.es.js.map
