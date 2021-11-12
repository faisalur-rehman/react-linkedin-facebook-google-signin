import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";
import LinkedInPage from "./components/LoginWithLinkedIn";
import ReactGoogleLogin from "./components/LoginWithGoogle";
const style = {
  button: {
    backgroundColor: "red",
    border: "none",
    color: "black",
    padding: "2px",
  },
};
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedin: true,
    });
  };
  render() {
    return this.state.isLoggedin ? (
      "Home"
    ) : (
      <div>
        {/* <FacebookLogin
          appId="321612752965657"
          autoLoad={true}
          // fields="name,email,picture"
          // onClick={componentClicked}
          callback={this.responseFacebook}
          buttonStyle={style.button}
        /> */}
        <LinkedInPage />
        {/* <ReactGoogleLogin /> */}
      </div>
    );
  }
}

export default App;
