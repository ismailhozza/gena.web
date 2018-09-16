import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Header from "./Header";
import StudentList from './StudentList';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <StudentList />
      </Container>
    );
  }
}

export default App;
