import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import * as LoginService from "../services/login"

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login = async (event) => {
    event.preventDefault();
    console.log(`Username: ${this.state.username}, password: ${this.state.password}`);
    try {
      const user = {
        username: this.state.username,
        password: this.state.password
      }

      const data = await LoginService.login(user)
      user.token = data.token
      window.localStorage.setItem('loggedGenaUser', JSON.stringify(user))
      LoginService.setToken(user.token)
      this.setState({username: '', password: ''})
    } catch(exception) {
      console.error("login failed")
    }
  }

  handleLoginFieldChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.login}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  name="username"
                  placeholder='E-mail address'
                  value={this.state.username}
                  onChange={this.handleLoginFieldChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name="password"
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleLoginFieldChange}
                />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login;