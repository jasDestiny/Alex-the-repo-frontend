import "./App.css";

import Home from "./pages/home-page/home-page.component";
import SignInAndSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

import { Route, Switch, Redirect } from "react-router";
import Header from "./components/header/header.component";
import React from "react";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSigned: null,
      searchInput: ""
    };
  }

  handleSignIn = (boolean) => {
    this.setState({ userSigned: boolean });
  };

  handleSignOut = () => {
    this.setState({ userSigned: null });
  };

  handleChange = (e) => {
    this.setState({searchInput : e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Header
            userSigned={this.state.userSigned}
            handleSignOut={this.handleSignOut}
          />
          <SearchBox handleChange={this.handleChange} />
        </div>
        <Switch>
          <Route exact path="/" render={()=> <Home searchInput={this.state.searchInput}/>} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.userSigned ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp handleSignIn={this.handleSignIn} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
