import React, { Component } from 'react';
import {
  Route
} from "react-router-dom";

import { Container } from 'semantic-ui-react'
import Header from "./Header";
import Home from "./Home"
import StudentList from './StudentList';
import Login from './Login';
import CourseList from './CourseList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const loggeduserJSON = window.localStorage.getItem('loggedGenaUser');
    if (loggeduserJSON) {
      const user = JSON.parse(loggeduserJSON);
      this.setState({ user });
      // console.log(user)
    }
  }

  handleLogout = () => {
    window.localStorage.removeItem('loggedGenaUser');
    this.setState({ user: null });
  }

  render() {
    const user = this.state.user
    const isAuthenticated = user && user.token ? true : false

    const contents = 
        <Container>
          <Route children={({location, history}) => 
            <Header isAuthed={isAuthenticated} history={history} location={location} handleLogout={this.handleLogout}/>
          } />
          <br />
          <Route path="/" exact component={Home}/>
          <Route path="/students" render={(props) => <StudentList {...props} user={user} />}/>
          <Route path="/courses" render={(props) => <CourseList {...props} user={user} />}/>
          <Route path="/login" component={Login} />
        </Container>

    return (
    user ? contents : <Container><Route children={({history}) =><Login history={history} />} /></Container>
    );
  }
}

export default App;
