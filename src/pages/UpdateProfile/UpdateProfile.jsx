import React, { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Button,
  Label,
  Card,
} from "semantic-ui-react";
import userService from "../../utils/userService";
import { useHistory } from "react-router-dom";
import "./UpdateProfile.css";

export default function UpdateProfile({ user }) {
  const history = useHistory();
  const [error, setError] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const [formInput, setFormInput] = useState({
    username: `${user.username}`,
    bio: `${user.bio}`,
    user: user,
    photoUrl: user.photoUrl
  });

  useEffect(() => {
    test();
  }, []);

  function test() {
    setFormInput({
      username: user.username,
      bio: user.bio,
      user: user,
    });
  }

  // function handleInput(e) {
  //   setFormInput({
  //     ...formInput,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  function handleChange(e) {
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
    userService.UpdateProfile(formInput)
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "65vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="signupForm">
          <Header as="h2" color="teal" textAlign="center">
            <Image className="signupLogo" />{" "}
            <span className="updateText">Profile Update</span>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked className="signupForm">
              <Label>Username: {user.username}</Label>
              <br />
              <br />

              <Form.Input
                type="username"
                name="username"
                value='username is unique and cannot be changed at this time'
                onChange={handleChange}
                required
                disabled
              />

              <Label>Bio:</Label>
              <br />
              <br />
              <Form.Field className="signupForm">
                <Form.TextArea
                  type="bio"
                  name="bio"
                  value={formInput.bio}
                  onChange={handleChange}
                  required
                />
              </Form.Field>
              <Label>Profile Photo:</Label>
              <br />
              <Card raised centered image={user.photoUrl} />
              <Form.Field className="signupForm">
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileUpload}
                />
              </Form.Field>
              <Button type="submit" className="btn" id="signupButton">
                Update
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
