import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { Grid, Form, Header, Button, Message, Image, Segment, Card } from "semantic-ui-react"
import MovieLogo from "../../components/MovieLogo/MovieLogo"


export default function LoginPage(props){
    const history = useHistory()
    const [error, setError ] = useState('')
    const [formInput, setFormInput] = useState({
        password: '',
        email: '',
    })
    function handleInput(e){
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.value
        })
      } 

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          await userService.login(formInput);
          props.handleSignUpOrLogin();
          history.push("/mainphoto");
        } catch (err) {
          setError(err.message);
        }
      }
      

    

    return (
        <>
        {/* <MovieLogo /> */}
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" textAlign="center">
                <Image className="signupLogo" src="https://i.imgur.com/zWf0THW.png" /> 
                <span className="signupText">Login to Share Space </span>
              </Header>
              <Form autoComplete="off" onSubmit={handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formInput.email}
                    onChange={handleInput}
                    required
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={formInput.password}
                    onChange={handleInput}
                    required
                  />
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    type="submit"
                    className="btn"
                    id="signupButton"
                  >
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                <span className='btmText'>New to Share Space? </span><Link to="/signup">Sign Up</Link>
              </Message>
              {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>
        </>
      );
}

