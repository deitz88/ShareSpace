import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Grid, Header, Image, Form, Segment, Button } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useHistory } from "react-router-dom";
import "./SignupPage.css";

export default function SignUpPage(props) {
  const history = useHistory();
  const [error, setError] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  function handleInput(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileUpload(e) {
    setFileUpload(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("photo", fileUpload);

    for (let key in formInput) {
      form.append(key, formInput[key]);
    }

    try {
      await userService.signup(form);
      props.handleSignUpOrLogin();
      history.push("/mainphoto");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="signupForm">
          <Header as="h2" color="teal" textAlign="center">
            <Image
              className="signupLogo"
              src="https://i.imgur.com/zWf0THW.png"
            />{" "}
            <span className="signupText">Sign Up </span>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked className="signupForm">
              <Form.Input
                name="username"
                placeholder="username"
                value={formInput.username}
                onChange={handleInput}
                required
              />
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
              <Form.Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formInput.confirmPassword}
                onChange={handleInput}
                required
              />
              <Form.Field className="signupForm">
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileUpload}
                  required
                />
              </Form.Field>
              <Button type="submit" className="btn" id="signupButton">
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
