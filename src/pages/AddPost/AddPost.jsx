import React, { useState } from "react";
import { Button, Form, Grid, Segment, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import NavBar from "../../components/NavBar/NavBar";
import "./AddPost.css";

export default function AddPost({ user, handleLogout }) {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState("");
  const [input, setInput] = useState({
    comment: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("comment", input.comment);
    const data = await postService.create(formData);
    console.log(data);
    history.push(`/${user.username}`);
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="profileCard">
            <h1 className="requestsHeader">New Photo Post</h1>
          </Card>
          <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
                required
              />
              <Form.Input
                style={{ minHeight: 100 }}
                className="form-control"
                name="comment"
                value={input.comment}
                placeholder="add comment"
                onChange={handleChange}
                required
              />
              <Button type="submit" className="btn" id="addButton">
                Create Post
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
