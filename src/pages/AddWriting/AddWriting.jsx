import React, { useState } from "react";
import { Button, Form, Grid, Segment, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import "./AddWriting.css";

export default function AddWriting({ user }) {
  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    content: "",
    user: user,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await postService.createWriting(input);
    history.push(`/${user.username}`);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={({ height: "100vh" }, { margin: "20px" })}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="profileCard">
            <h1 className="requestsHeader">Add New Writing</h1>
          </Card>
          <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                className="form-control"
                name="title"
                placeholder="title for your writing"
                onChange={handleChange}
                required
              />
              <Form.TextArea
                style={{ minHeight: 100 }}
                className="form-control"
                name="content"
                value={input.content}
                placeholder="add writing content"
                onChange={handleChange}
                required
              />
              <Button type="submit" className="btn" id="addButton">
                Post Your Thoughts
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
