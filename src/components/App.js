import React, { Component, Fragment } from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

import { Container } from 'semantic-ui-react'
import Header from "./Header";
import StudentList from './StudentList';
import Login from './Login';
import CourseList from './CourseList';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const loggeduserJSON = window.localStorage.getItem('loggedGenaUser');
    console.log(loggeduserJSON);
    if (loggeduserJSON) {
      const user = JSON.parse(loggeduserJSON);
      console.log(user)
      this.setState({ user });
    }
  }

  render() {
    const user = this.state.user
    console.log(user)
    const isAuthenticated = this.state.user.token ? true : false
    console.log(isAuthenticated);

    return (
      <Container>
        {isAuthenticated ?
          <Header /> : null
        }
        <br />
        {user ? (
          <Fragment>
            <Route path="/students" render={() => <StudentList user={user} />}/>
            <Route path="/courses" component={CourseList} />
          </Fragment>
        ) : null}
        <Route path="/login" component={Login} />
      </Container>
    );
  }
}

export default App;
