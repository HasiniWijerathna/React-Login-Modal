
# React Login Modal

React Login Modal is a functional responsive login and signup modal with validation which supports custom configurable UI properties.

- Validation for login and sign up 
- CSS customizable - Styles of button color, font styles and font color
- Custom errors - User authentication errors can be passed as additional validation

[![NPM](https://img.shields.io/npm/v/react-markdown-editor.svg)](https://www.npmjs.com/package/react-markdown-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM](https://nodei.co/npm/react-login-modal.png)](https://nodei.co/npm/react-login-modal/)


## Installation

Can be installed via npm:

```bash
npm install --save react-login-modal
```

Or  `yarn`

yarn add react-login-modal

```bash
npm install --save react-login-modal
```

## Usage

### The most basic use of the login modal can be described with :

```jsx
import React, { Component } from 'react'

import LoginModal from 'react-login-modal'

class Example extends Component {
    handleSignup = (username, email, password) => {}
    handleLogin = (username, email, password) => {}
	
	render () {
        return (
         <LoginModal
		    handleSignup={this.handleSignup}
         	handleLogin={this.handleLogin}
        />
        )
    }
}

```

### CSS Properties can be customized as shown below:

```jsx
import React, { Component } from "react";
import LoginModal from "react-login-modal";

class Example extends Component {
  handleSignup = (username, email, password) => {};
  handleLogin = (username, email, password) => {};

  render() {
    return (
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
    );
  }
}
```

``errorEnable`` and ``errorMessage`` are used to prompt an customized error for login/sign  up.
These erros can be shown by setting ``errorEnable``, ``true`` and passing an error message to ``errorMessage`` as showed in the example

## Properties


Property          | Type                  | Default      | Description
---               | ---                   | ---          | ---
`buttonColor`     | *string*              | #5264AE          | Button color to be applied for login and sign up  
`disabledButtonColor`     | *string*              | #a8b1d6        | Button color to be applied for login and sign up  when the button is disabled 
`buttonHoverColor`     | *string*              | #6373b6         | Button color to be applied for login and sign up  when the mouse hover event gets triggered
`fontFamily`     | *string*              | Nunito, Roboto, Arial, sans-serif       | 	Font style to be applied to the component
`errorMessage`     | *string*              | Username or password is incorrect❓       | Authentication error message to be shown to disable login and sign up buttons
`errorEnable`     | *_bool_*              | false           | Enable custom error messages


## Callbacks

Property          | Type       | Description
---               | ---        | ---
`handleSignup`    | *func*     | Gets called when the sign up button is clicked with the validated username, email, password
`handleLogin`     | *func*     | Gets called when the login button is clicked with the authenticated username, password

  
  ## Registration validation

Validation to set the  sign up button enable,

-  Username must contain at least three characters
-  Email validation
- Password at least should contains eight characters, at least one letter and one number
- Password and confirm password should be matched
- Input fields can not be empty

  ## Login validation
  
  Validation to set the login button enable,
- Username and password fields can not be empty

## Compatibility

### React

Compatible with the latest version of 16.x

Latest compatible versions:
-   15.x and 16.x



## License

MIT © [HasiniWijerathna](https://github.com/HasiniWijerathna)


